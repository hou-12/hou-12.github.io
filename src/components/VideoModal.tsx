import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './VideoModal.css';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    title: string;
}

export function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play();
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="video-modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="video-modal-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="video-modal-header">
                            <h3>{title}</h3>
                            <span className="video-modal-badge">Demo Video</span>
                        </div>
                        <div className="video-modal-wrapper">
                            <video
                                ref={videoRef}
                                src={videoSrc}
                                controls
                                playsInline
                                className="video-modal-player"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
