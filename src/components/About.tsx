import { useEffect, useRef, useState } from 'react';
import './About.css';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { useLanguage } from '../i18n/i18n';
import { Code2, Rocket, Coffee, Zap } from 'lucide-react';

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

                <StaggerContainer className="about-bento" staggerDelay={0.1}>
                    {/* Main intro card with avatar */}
                    <StaggerItem className="bento-item bento-main">
                        <div className="bento-avatar-wrapper">
                            <img src="/avatar.png" alt="Developer avatar" className="bento-avatar" />
                            <div className="bento-avatar-glow" />
                        </div>
                        <div className="bento-main-content">
                            <p className="bento-intro">
                                {t('about.intro')} <span className="gradient-text">Houssam</span>{t('about.introText')}
                            </p>
                            <p className="bento-description">
                                {t('about.paragraph1')}
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Stats cards */}
                    <StaggerItem className="bento-item bento-stat">
                        <div className="stat-icon"><Code2 size={28} /></div>
                        <span className="stat-number">
                            <CountUp end={4} suffix="+" />
                        </span>
                        <span className="stat-label">{t('about.stats.projects')}</span>
                    </StaggerItem>

                    <StaggerItem className="bento-item bento-stat">
                        <div className="stat-icon stat-icon-cyan"><Rocket size={28} /></div>
                        <span className="stat-number">
                            <CountUp end={10} suffix="+" duration={2500} />
                        </span>
                        <span className="stat-label">{t('about.stats.technologies')}</span>
                    </StaggerItem>

                    <StaggerItem className="bento-item bento-stat bento-passion">
                        <div className="stat-icon stat-icon-warm"><Zap size={28} /></div>
                        <span className="stat-number">∞</span>
                        <span className="stat-label">{t('about.stats.passion')}</span>
                    </StaggerItem>

                    {/* Currently building card */}
                    <StaggerItem className="bento-item bento-building">
                        <div className="building-header">
                            <Coffee size={20} className="building-icon" />
                            <span className="building-label">Currently Building</span>
                        </div>
                        <p className="building-text">
                            {t('about.paragraph2')}
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
