import { useState, useEffect } from 'react';
import './Navbar.css';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../i18n/i18n';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="navbar-logo">
                    <span className="gradient-text">Hou12</span>
                </a>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={handleNavClick}>{t('nav.about')}</a></li>
                    <li><a href="#projects" onClick={handleNavClick}>{t('nav.projects')}</a></li>
                    <li><a href="#skills" onClick={handleNavClick}>{t('nav.skills')}</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>{t('nav.contact')}</a></li>
                    <li>
                        <a href="/cv.pdf" target="_blank" className="nav-cta">
                            {t('nav.downloadCv')}
                        </a>
                    </li>
                    <li className="nav-lang-switcher">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

