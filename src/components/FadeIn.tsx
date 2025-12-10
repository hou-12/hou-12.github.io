import { type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    duration?: number;
}

const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
};

export function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    className = '',
    duration = 0.6
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const offset = directionOffset[direction];

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...offset
            }}
            animate={isInView ? {
                opacity: 1,
                x: 0,
                y: 0
            } : {}}
            transition={{
                duration,
                delay: delay / 1000,
                ease: [0.25, 0.4, 0.25, 1], // Custom easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for animating children sequentially
export function StaggerContainer({
    children,
    className = '',
    staggerDelay = 0.1
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Individual item for stagger animation
export function StaggerItem({
    children,
    className = ''
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.4, 0.25, 1],
                    }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

