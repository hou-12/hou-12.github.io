import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

const N_NODES = 110;
const MAX_LINES = 250;
const SPHERE_RADIUS = 1.25;
const CONNECT_DIST = 0.90; // distance threshold for neural connection

function InteractiveOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isHovered = useRef(false);

  // 1. Fibonacci Sphere for base distribution
  const baseNodes = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    for (let i = 0; i < N_NODES; i++) {
      const y = 1 - (i / (N_NODES - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      arr.push(new THREE.Vector3(x * SPHERE_RADIUS, y * SPHERE_RADIUS, z * SPHERE_RADIUS));
    }
    return arr;
  }, []);

  // 2. Dynamic coordinate arrays (reused each frame to avoid allocation)
  const dynNodes = useMemo(() => baseNodes.map((b) => b.clone()), [baseNodes]);

  // 3. Preallocated geometry attributes
  const pointsPos = useMemo(() => new Float32Array(N_NODES * 3), []);
  const pointsCol = useMemo(() => new Float32Array(N_NODES * 3), []);
  const linesPos = useMemo(() => new Float32Array(MAX_LINES * 2 * 3), []);
  const linesCol = useMemo(() => new Float32Array(MAX_LINES * 2 * 3), []);

  const pointsGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pointsPos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(pointsCol, 3));
    return g;
  }, [pointsPos, pointsCol]);

  const linesGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(linesPos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(linesCol, 3));
    return g;
  }, [linesPos, linesCol]);

  // Palette definitions
  const goldColor = useMemo(() => new THREE.Color('#C9A84C'), []);
  const wineColor = useMemo(() => new THREE.Color('#8B1A2F'), []);

  // Listen to window size and mouse client moves
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Normalize mouse coords between -1 and 1
      const mx = (e.clientX / window.innerWidth) * 2 - 1;
      const my = (e.clientY / window.innerHeight) * -2 + 1;
      mouse.current.targetX = mx * 1.5;
      mouse.current.targetY = my * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const group = groupRef.current;
    if (!group) return;

    // A. Apply smooth interpolation to rotation targets (Spring Damping)
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    // Apply baseline rotation + mouse influence
    group.rotation.y = t * 0.09 + mouse.current.x * 0.4;
    group.rotation.x = mouse.current.y * 0.4;

    // B. Calculate wobbly coordinates (Organic Breathing Sphere)
    const hoverScale = isHovered.current ? 1.25 : 1.0;
    const breatheSpeed = 1.2;
    const waveFreq = 3.5;
    const waveAmp = 0.16;

    for (let i = 0; i < N_NODES; i++) {
      const b = baseNodes[i];
      // Wave function based on spatial dimensions + elapsed time
      const offset = Math.sin(b.x * waveFreq + t * breatheSpeed) *
                     Math.cos(b.y * waveFreq + t * breatheSpeed) *
                     Math.sin(b.z * waveFreq + t * breatheSpeed);
      const flexRadius = SPHERE_RADIUS + offset * waveAmp * hoverScale;
      dynNodes[i].copy(b).normalize().multiplyScalar(flexRadius);

      // Write into points position buffer
      const idx = i * 3;
      pointsPos[idx] = dynNodes[i].x;
      pointsPos[idx + 1] = dynNodes[i].y;
      pointsPos[idx + 2] = dynNodes[i].z;

      // Pulse color of points based on wave phase
      const colorProgress = (offset + 1) / 2; // [0,1]
      const col = new THREE.Color().lerpColors(wineColor, goldColor, colorProgress);
      pointsCol[idx] = col.r;
      pointsCol[idx + 1] = col.g;
      pointsCol[idx + 2] = col.b;
    }

    if (pointsRef.current) {
      pointsGeo.attributes.position.needsUpdate = true;
      pointsGeo.attributes.color.needsUpdate = true;
    }

    // C. Dynamic Neural Connections Computation
    let lineCount = 0;
    const distLimit = CONNECT_DIST * (isHovered.current ? 1.15 : 1.0);

    for (let i = 0; i < N_NODES && lineCount < MAX_LINES; i++) {
      const nodeA = dynNodes[i];
      for (let j = i + 1; j < N_NODES && lineCount < MAX_LINES; j++) {
        const nodeB = dynNodes[j];
        const dist = nodeA.distanceTo(nodeB);

        if (dist < distLimit) {
          const lIdx = lineCount * 6;
          // Set point A
          linesPos[lIdx] = nodeA.x;
          linesPos[lIdx + 1] = nodeA.y;
          linesPos[lIdx + 2] = nodeA.z;
          // Set point B
          linesPos[lIdx + 3] = nodeB.x;
          linesPos[lIdx + 4] = nodeB.y;
          linesPos[lIdx + 5] = nodeB.z;

          // Connection fade at boundaries
          const intensity = Math.pow(1 - dist / distLimit, 1.4);
          
          // Connective gradient color mapping
          const mixCol = new THREE.Color().lerpColors(wineColor, goldColor, intensity);
          const finalCol = mixCol.multiplyScalar(intensity * 0.95);

          const cIdx = lineCount * 6;
          linesCol[cIdx] = finalCol.r;
          linesCol[cIdx + 1] = finalCol.g;
          linesCol[cIdx + 2] = finalCol.b;
          linesCol[cIdx + 3] = finalCol.r;
          linesCol[cIdx + 4] = finalCol.g;
          linesCol[cIdx + 5] = finalCol.b;

          lineCount++;
        }
      }
    }

    // Mask unused lines in buffer
    for (let k = lineCount; k < MAX_LINES; k++) {
      const lIdx = k * 6;
      linesPos[lIdx] = 0; linesPos[lIdx + 1] = 0; linesPos[lIdx + 2] = 0;
      linesPos[lIdx + 3] = 0; linesPos[lIdx + 4] = 0; linesPos[lIdx + 5] = 0;
    }

    if (linesRef.current) {
      linesGeo.attributes.position.needsUpdate = true;
      linesGeo.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => { isHovered.current = true; }}
      onPointerOut={() => { isHovered.current = false; }}
    >
      {/* 1. Point Nodes */}
      <points ref={pointsRef} geometry={pointsGeo}>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 2. Neural Connective Paths */}
      <lineSegments ref={linesRef} geometry={linesGeo}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.65}
          depthWrite={false}
          linewidth={1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="hero-3d-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <InteractiveOrb />
      </Canvas>
      <div className="canvas-glow"></div>
    </div>
  );
}
