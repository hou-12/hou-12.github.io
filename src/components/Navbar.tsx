import { useState, useEffect } from 'react';
import './Navbar.css';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../i18n/i18n';
import { Magnetic } from './Magnetic';

const NAV_SECTIONS = ['about', 'projects', 'skills', 'contact'];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section with IntersectionObserver
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        NAV_SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Magnetic>
                    <a href="#" className="navbar-logo">
                        <span className="gradient-text">Hou12</span>
                    </a>
                </Magnetic>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <li><Magnetic><a href="#about" onClick={handleNavClick} className={activeSection === 'about' ? 'active' : ''}>{t('nav.about')}</a></Magnetic></li>
                    <li><Magnetic><a href="#projects" onClick={handleNavClick} className={activeSection === 'projects' ? 'active' : ''}>{t('nav.projects')}</a></Magnetic></li>
                    <li><Magnetic><a href="#skills" onClick={handleNavClick} className={activeSection === 'skills' ? 'active' : ''}>{t('nav.skills')}</a></Magnetic></li>
                    <li><Magnetic><a href="#contact" onClick={handleNavClick} className={activeSection === 'contact' ? 'active' : ''}>{t('nav.contact')}</a></Magnetic></li>
                    <li>
                        <Magnetic>
                            <a href="/cv.pdf" target="_blank" className="nav-cta">
                                {t('nav.downloadCv')}
                            </a>
                        </Magnetic>
                    </li>
                    <li className="nav-lang-switcher">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
