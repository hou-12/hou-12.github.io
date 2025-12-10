import { useLanguage } from '../i18n/i18n';
import './LanguageSwitcher.css';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    };

    return (
        <button
            className="language-switcher"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
        >
            <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
                🇬🇧 EN
            </span>
            <span className="lang-divider">/</span>
            <span className={`lang-option ${language === 'fr' ? 'active' : ''}`}>
                🇫🇷 FR
            </span>
        </button>
    );
}
