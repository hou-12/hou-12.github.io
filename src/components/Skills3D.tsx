import { useRef, useEffect, useState, useMemo } from 'react';

interface Skill {
    name: string;
    icon: React.ReactNode;
    category: 'frontend' | 'backend' | 'devops';
}

interface Skills3DSphereProps {
    skills: Skill[];
}

export function Skills3D({ skills }: Skills3DSphereProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Core animation/interaction states
    const [radius, setRadius] = useState(170);
    const [tags, setTags] = useState<{
        skill: Skill;
        x: number;
        y: number;
        z: number;
        scale: number;
        opacity: number;
        zIndex: number;
    }[]>([]);

    // Rotation angles
    const angleX = useRef(0);
    const angleY = useRef(0);

    // Rotation velocities (initial spin on mount)
    const velocityX = useRef(0.002);
    const velocityY = useRef(0.005);

    // Drag tracking
    const isDragging = useRef(false);
    const lastPointer = useRef({ x: 0, y: 0 });

    // Handle responsive radius sizing
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setRadius(100);
            } else if (window.innerWidth < 1024) {
                setRadius(140);
            } else {
                setRadius(170);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Generate base Fibonacci coordinates once
    const baseCoords = useMemo(() => {
        const coords: { skill: Skill; x: number; y: number; z: number }[] = [];
        const total = skills.length;
        if (total === 0) return coords;

        const goldenRatio = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < total; i++) {
            // Distribute points evenly on a sphere
            const y = total > 1 ? 1 - (i / (total - 1)) * 2 : 0;
            const r = Math.sqrt(1 - y * y);
            const theta = goldenRatio * i;

            const x = Math.cos(theta) * r;
            const z = Math.sin(theta) * r;

            coords.push({
                skill: skills[i],
                x,
                y,
                z,
            });
        }
        return coords;
    }, [skills]);

    // Main animation loop
    useEffect(() => {
        let animationFrameId: number;

        const updatePositions = () => {
            // Apply friction and inertia when not dragging
            if (!isDragging.current) {
                velocityX.current *= 0.95;
                velocityY.current *= 0.95;

                // Gentle baseline rotation when not dragging
                const baseVelX = 0.0008;
                const baseVelY = 0.0015;

                if (Math.abs(velocityX.current) < baseVelX) {
                    velocityX.current += (baseVelX - velocityX.current) * 0.05;
                }
                if (Math.abs(velocityY.current) < baseVelY) {
                    velocityY.current += (baseVelY - velocityY.current) * 0.05;
                }
            }

            // Update rotation angles based on velocities
            angleX.current += velocityX.current;
            angleY.current += velocityY.current;

            const sinX = Math.sin(angleX.current);
            const cosX = Math.cos(angleX.current);
            const sinY = Math.sin(angleY.current);
            const cosY = Math.cos(angleY.current);

            // Compute rotated and projected coordinate details for each tag
            const updatedTags = baseCoords.map((coord) => {
                // 1. Rotate around Y-axis
                const x1 = coord.x * cosY - coord.z * sinY;
                const z1 = coord.x * sinY + coord.z * cosY;

                // 2. Rotate around X-axis
                const y1 = coord.y * cosX - z1 * sinX;
                const z2 = coord.y * sinX + z1 * cosX;

                // Scale coordinates up by radius
                const xScaled = x1 * radius;
                const yScaled = y1 * radius;
                const zScaled = z2 * radius; // ranges between -radius and +radius

                // 3. Perspective factor (zScaled ranges between -radius and +radius)
                const depth = radius * 2.2;
                const scale = (depth + zScaled) / depth; // ranges from ~0.55 to ~1.45
                const opacity = 0.35 + 0.65 * ((zScaled + radius) / (2 * radius)); // ranges from 0.35 to 1.0
                const zIndex = Math.round((zScaled + radius) * 100);

                return {
                    skill: coord.skill,
                    x: xScaled,
                    y: yScaled,
                    z: zScaled,
                    scale,
                    opacity,
                    zIndex,
                };
            });

            setTags(updatedTags);
            animationFrameId = requestAnimationFrame(updatePositions);
        };

        updatePositions();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [baseCoords, radius]);

    // Drag event handlers
    const handleStart = (clientX: number, clientY: number) => {
        isDragging.current = true;
        lastPointer.current = { x: clientX, y: clientY };
    };

    const handleMove = (clientX: number, clientY: number) => {
        if (!isDragging.current) return;

        const deltaX = clientX - lastPointer.current.x;
        const deltaY = clientY - lastPointer.current.y;

        // Adjust rotation velocities based on delta movements
        velocityY.current = deltaX * 0.003;
        velocityX.current = -deltaY * 0.003;

        lastPointer.current = { x: clientX, y: clientY };
    };

    const handleEnd = () => {
        isDragging.current = false;
    };

    // Attach global listeners during active drag to ensure smooth movements even if cursor leaves container
    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            handleMove(e.clientX, e.clientY);
        };

        const handleGlobalMouseUp = () => {
            handleEnd();
        };

        const handleGlobalTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        if (isDragging.current) {
            window.addEventListener('mousemove', handleGlobalMouseMove);
            window.addEventListener('mouseup', handleGlobalMouseUp);
            window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true });
            window.addEventListener('touchend', handleGlobalMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('touchmove', handleGlobalTouchMove);
            window.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, [isDragging.current]);

    return (
        <div
            ref={containerRef}
            className="skills-3d-container"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                touchAction: 'none',
            }}
            onMouseDown={(e) => {
                e.preventDefault();
                handleStart(e.clientX, e.clientY);
            }}
            onTouchStart={(e) => {
                if (e.touches.length > 0) {
                    handleStart(e.touches[0].clientX, e.touches[0].clientY);
                }
            }}
        >
            {tags.map((tag) => (
                <div
                    key={tag.skill.name}
                    className={`skill-3d-tag skill-3d-${tag.skill.category}`}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) translate3d(${tag.x}px, ${tag.y}px, 0) scale(${tag.scale})`,
                        opacity: tag.opacity,
                        zIndex: tag.zIndex,
                        pointerEvents: tag.zIndex > radius * 80 ? 'auto' : 'none', // Disable interaction for background items
                        cursor: 'pointer',
                        transition: isDragging.current ? 'none' : 'opacity 0.1s linear, transform 0.1s linear',
                    }}
                >
                    <span className="skill-3d-icon">{tag.skill.icon}</span>
                    <span className="skill-3d-name">{tag.skill.name}</span>
                </div>
            ))}

            <div className="skills-3d-hint">
                <span>Drag to Rotate • Click & Hold</span>
            </div>
        </div>
    );
}
