import './Hero.css';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';
import { motion } from 'framer-motion';

// Letter-by-letter animation component
function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
    const letters = text.split('');

    return (
        <motion.span className={className}>
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.03,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    style={{ display: 'inline-block' }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Word-by-word animation component
function AnimatedWords({ text, className = '', delayOffset = 0 }: { text: string; className?: string; delayOffset?: number }) {
    const words = text.split(' ');

    return (
        <motion.span className={className}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                        duration: 0.5,
                        delay: delayOffset + index * 0.08,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

export function Hero() {
    const { t, language } = useLanguage();

    return (
        <section className="hero-section">
            {/* Animated Background */}
            <div className="hero-bg">
                <div className="hero-gradient hero-gradient-1"></div>
                <div className="hero-gradient hero-gradient-2"></div>
                <div className="hero-gradient hero-gradient-3"></div>
                <div className="hero-particles"></div>
            </div>

            <div className="container hero-container">
                <FadeIn>
                    <motion.div
                        className="hero-badge"
                        key={`badge-${language}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <span className="badge-dot"></span>
                        {t('hero.badge')}
                    </motion.div>
                </FadeIn>

                <motion.div
                    key={`title-${language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <h1 className="hero-title">
                        <AnimatedWords text={t('hero.greeting')} delayOffset={0.2} />
                        <span className="gradient-text gradient-text-animated">
                            <AnimatedText text={t('hero.name')} />
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    key={`subtitle-${language}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <h2 className="hero-subtitle">
                        {t('hero.subtitle')}
                    </h2>
                </motion.div>

                <motion.div
                    key={`bio-${language}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <p className="hero-bio">
                        {t('hero.bio')} <br />
                        {t('hero.bioDetail')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <div className="hero-actions">
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(112, 0, 255, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {t('hero.viewWork')}
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {t('hero.getInTouch')}
                        </motion.a>
                        <motion.a
                            href="/cv.pdf"
                            target="_blank"
                            className="btn btn-ghost"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            {t('hero.downloadCv')}
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <div className="hero-social">
                        <motion.a
                            href="https://github.com/hou-12"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/houssam-hamrouni"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
            >
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>{t('hero.scrollToExplore')}</span>
            </motion.div>
        </section>
    );
}


