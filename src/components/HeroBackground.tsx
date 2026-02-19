import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

// ── Design constants ──────────────────────────────────────────────────────────
// Camera: position [0,0,3], fov 60 → visible at z=0: ~5.2 × 3.0 world units
const N_PARTICLES = 500;
const TRAIL_LEN = 32;      // ring-buffer positions per particle
const SPEED = 0.011;   // world units / tick
const NOISE_SCALE = 0.50;    // lower = wider, more graceful curves
const W = 2.5;     // half-width  (particles confined to ±W)
const H = 1.4;     // half-height (particles confined to ±H)

// Colors
const GOLD_COL = new THREE.Color('#C9A84C');   // head color
const WINE_COL = new THREE.Color('#8B1A2F');   // mid-trail accent

// ── Value noise (no deps, no allocation) ─────────────────────────────────────
function hash(x: number, y: number): number {
    // Pseudo-random float in [0,1] for integer lattice point (x,y)
    const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
    return n - Math.floor(n);
}

function vnoise(x: number, y: number): number {
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    // Quintic smoothstep
    const ux = fx * fx * fx * (fx * (fx * 6 - 15) + 10);
    const uy = fy * fy * fy * (fy * (fy * 6 - 15) + 10);
    const a = hash(ix, iy);
    const b = hash(ix + 1, iy);
    const c = hash(ix, iy + 1);
    const d = hash(ix + 1, iy + 1);
    return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

/**
 * Returns a divergence-free 2D velocity [vx, vy] by taking the
 * curl of a scalar potential field: vx = ∂φ/∂y, vy = -∂φ/∂x
 * This guarantees smooth, non-crossing flow lines.
 */
function curlNoise(x: number, y: number, t: number): [number, number] {
    const eps = 0.025;
    const s = NOISE_SCALE;
    const tx = t * 0.07;  // slow time evolution
    const n0 = vnoise(x * s + tx, y * s);
    const nx = vnoise(x * s + tx + eps, y * s);
    const ny = vnoise(x * s + tx, y * s + eps);
    return [(ny - n0) / eps, -(nx - n0) / eps];
}

// ── Flow field scene ──────────────────────────────────────────────────────────
function FlowField() {
    const mouseNDC = useRef(new THREE.Vector2(0, 0));

    // Per-particle ring buffers: [x0,y0, x1,y1, ... x(N-1),y(N-1)]
    const trails = useMemo(() => {
        const arr: Float32Array[] = [];
        for (let i = 0; i < N_PARTICLES; i++) {
            const t = new Float32Array(TRAIL_LEN * 2);
            const rx = (Math.random() - 0.5) * W * 2;
            const ry = (Math.random() - 0.5) * H * 2;
            for (let k = 0; k < TRAIL_LEN; k++) {
                t[k * 2] = rx;
                t[k * 2 + 1] = ry;
            }
            arr.push(t);
        }
        return arr;
    }, []);

    // Ring-buffer head indices
    const heads = useMemo(() => new Int32Array(N_PARTICLES), []);

    // Pre-allocated per-particle "velocity angle" hue offset (breaks uniformity)
    const hueShift = useMemo(() => {
        const arr = new Float32Array(N_PARTICLES);
        for (let i = 0; i < N_PARTICLES; i++) arr[i] = Math.random();
        return arr;
    }, []);

    // Line geometry: N × (TRAIL_LEN-1) segments × 2 vertices
    const SEGS = TRAIL_LEN - 1;
    const NVERTS = N_PARTICLES * SEGS * 2;
    const posArr = useMemo(() => new Float32Array(NVERTS * 3), [NVERTS]);
    const colArr = useMemo(() => new Float32Array(NVERTS * 3), [NVERTS]);

    const geo = useMemo(() => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
        g.setAttribute('color', new THREE.BufferAttribute(colArr, 3));
        return g;
    }, [posArr, colArr]);

    const mat = useMemo(() => new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    }), []);

    // Scratch color — reused every frame to avoid allocations
    const tmp = useMemo(() => new THREE.Color(), []);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseNDC.current.set(
                (e.clientX / window.innerWidth) * 2 - 1,
                (e.clientY / window.innerHeight) * -2 + 1
            );
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    useFrame(({ clock }) => {
        const t = clock.elapsedTime;
        // Map mouse NDC → world space (approximate, camera z=3 fov=60)
        const mx = mouseNDC.current.x * W;
        const my = mouseNDC.current.y * H;

        for (let i = 0; i < N_PARTICLES; i++) {
            const trail = trails[i];
            const head = heads[i];
            const hx = trail[head * 2];
            const hy = trail[head * 2 + 1];

            // ── Velocity from curl noise ──
            let [vx, vy] = curlNoise(hx, hy, t);

            // ── Mouse vortex — creates a swirling orbital effect near cursor ──
            const dx = hx - mx, dy = hy - my;
            const dSq = dx * dx + dy * dy;
            if (dSq < 1.8 && dSq > 0.001) {
                const d = Math.sqrt(dSq);
                const str = (1 - d / 1.35) * 0.004;  // gentler orbit
                // Perpendicular → orbit, not just push
                vx += (-dy / d) * str;
                vy += (dx / d) * str;
            }

            // Clamp velocity magnitude so fast mouse can't explode particles
            const vmag = Math.sqrt(vx * vx + vy * vy);
            if (vmag > 5.0) { vx = (vx / vmag) * 5.0; vy = (vy / vmag) * 5.0; }

            // ── Advance ring-buffer head ──
            const nh = (head + 1) % TRAIL_LEN;
            trail[nh * 2] = hx + vx * SPEED;
            trail[nh * 2 + 1] = hy + vy * SPEED;
            heads[i] = nh;

            // ── Respawn out-of-bounds particles ──
            if (
                Math.abs(trail[nh * 2]) > W * 1.15 ||
                Math.abs(trail[nh * 2 + 1]) > H * 1.15
            ) {
                const rx = (Math.random() - 0.5) * W * 2;
                const ry = (Math.random() - 0.5) * H * 2;
                for (let k = 0; k < TRAIL_LEN; k++) {
                    trail[k * 2] = rx;
                    trail[k * 2 + 1] = ry;
                }
                heads[i] = 0;
                continue;
            }

            // ── Write geometry (newest → oldest) ──
            // Hue offset: 0=pure gold  1=more wine, adds variety
            const hs = hueShift[i]; // [0,1]

            const vbase = i * SEGS * 2;
            for (let s = 0; s < SEGS; s++) {
                const iA = (nh - s + TRAIL_LEN) % TRAIL_LEN;
                const iB = (nh - s - 1 + TRAIL_LEN) % TRAIL_LEN;
                const vi3 = (vbase + s * 2) * 3;

                // Position A
                posArr[vi3] = trail[iA * 2];
                posArr[vi3 + 1] = trail[iA * 2 + 1];
                posArr[vi3 + 2] = 0;
                // Position B
                posArr[vi3 + 3] = trail[iB * 2];
                posArr[vi3 + 4] = trail[iB * 2 + 1];
                posArr[vi3 + 5] = 0;

                // Color: head glows gold → mid mixes toward wine → tail fades to black
                const alphaA = Math.pow(Math.max(0, 1 - s / SEGS), 1.8);
                const alphaB = Math.pow(Math.max(0, 1 - (s + 1) / SEGS), 1.8);

                // Midpoint hue blend: near head=gold, near tail=wine
                const hueA = Math.min(1, (s / SEGS) * hs * 2.5);
                const hueB = Math.min(1, ((s + 1) / SEGS) * hs * 2.5);

                tmp.lerpColors(GOLD_COL, WINE_COL, hueA).multiplyScalar(alphaA);
                colArr[vi3] = tmp.r;
                colArr[vi3 + 1] = tmp.g;
                colArr[vi3 + 2] = tmp.b;

                tmp.lerpColors(GOLD_COL, WINE_COL, hueB).multiplyScalar(alphaB);
                colArr[vi3 + 3] = tmp.r;
                colArr[vi3 + 4] = tmp.g;
                colArr[vi3 + 5] = tmp.b;
            }
        }

        geo.attributes.position.needsUpdate = true;
        geo.attributes.color.needsUpdate = true;
    });

    return (
        <lineSegments geometry={geo} material={mat} frustumCulled={false} />
    );
}

// ── Export ────────────────────────────────────────────────────────────────────
export function HeroBackground() {
    return (
        <div style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100%',
            zIndex: -1,
        }}>
            <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
                <FlowField />
            </Canvas>
        </div>
    );
}
