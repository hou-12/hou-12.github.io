import { useEffect, useRef, useState } from 'react';
import './About.css';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
}

function CountUp({ end, duration = 2000, suffix = '' }: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [hasStarted, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="about-section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">{t('about.title')}</h2>
                </FadeIn>

                <div className="about-content">
                    <FadeIn delay={100} direction="left">
                        <div className="about-image-container">
                            <div className="about-image-placeholder">
                                <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                                <span>{t('about.addPhoto')}</span>
                            </div>
                            <div className="about-image-glow"></div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} direction="right">
                        <div className="about-text">
                            <p className="about-intro">
                                {t('about.intro')} <span className="gradient-text">Houssam</span>{t('about.introText')}
                            </p>
                            <p>
                                {t('about.paragraph1')}
                            </p>
                            <p>
                                {t('about.paragraph2')}
                            </p>

                            <div className="about-stats">
                                <div className="stat">
                                    <span className="stat-number">
                                        <CountUp end={4} suffix="+" />
                                    </span>
                                    <span className="stat-label">{t('about.stats.projects')}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">
                                        <CountUp end={10} suffix="+" duration={2500} />
                                    </span>
                                    <span className="stat-label">{t('about.stats.technologies')}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">∞</span>
                                    <span className="stat-label">{t('about.stats.passion')}</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

