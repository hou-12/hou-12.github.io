import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export function Counter({
    from = 0,
    to,
    duration = 2,
    suffix = '',
    className = ''
}: CounterProps) {
    const [count, setCount] = useState(from);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;
            const controls = animate(from, to, {
                duration,
                ease: [0.25, 0.4, 0.25, 1],
                onUpdate: (value) => setCount(Math.round(value)),
            });
            return () => controls.stop();
        }
    }, [isInView, from, to, duration]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {count}{suffix}
        </motion.span>
    );
}
