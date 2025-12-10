import './FeaturedProject.css';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../i18n/i18n';

export function FeaturedProject() {
    const { t } = useLanguage();

    return (
        <section className="featured-section">
            <div className="container">
                <FadeIn>
                    <div className="featured-label">
                        <span className="featured-badge">{t('featured.badge')}</span>
                    </div>
                </FadeIn>

                <div className="featured-content">
                    <FadeIn delay={100} direction="left">
                        <div className="featured-info">
                            <h2 className="featured-title">{t('featured.title')}</h2>
                            <p className="featured-subtitle">{t('featured.description')}</p>

                            <div className="featured-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🚀</span>
                                    <span>100% Lighthouse Score</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <span>Real-time WebSocket Updates</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📱</span>
                                    <span>PWA with Offline Support</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🗺️</span>
                                    <span>1000+ Bus Stops Clustered</span>
                                </div>
                            </div>

                            <div className="featured-tech">
                                <span>Next.js 16</span>
                                <span>React 19</span>
                                <span>TypeScript</span>
                                <span>Fastify</span>
                                <span>Socket.io</span>
                                <span>Redis</span>
                            </div>

                            <div className="featured-actions">
                                <a href="https://cyprusbusmap.hou12.me" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    {t('featured.viewLive')}
                                </a>
                                <a href="https://github.com/hou-12/bus-map" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={200} direction="right">
                        <div className="featured-preview">
                            <div className="preview-frame">
                                <div className="preview-header">
                                    <div className="preview-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="preview-url">cyprusbusmap.hou12.me</div>
                                </div>
                                <img
                                    src="/projects/bus-tracker.png"
                                    alt="Cyprus Bus Tracker - Real-time map showing live bus locations"
                                    className="preview-image"
                                />
                            </div>
                            <div className="preview-glow"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

