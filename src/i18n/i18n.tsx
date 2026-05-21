import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en } from './en';
import { fr } from './fr';

type Language = 'en' | 'fr';
type Translations = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, Translations> = { en, fr };
const SEO_BY_LANGUAGE: Record<Language, {
    title: string;
    description: string;
    locale: string;
    canonical: string;
}> = {
    en: {
        title: 'Houssam Hamrouni | AI & Web3 Software Engineer',
        description: 'Portfolio of Houssam Hamrouni, a full-stack software engineer building AI voice systems, Web3 apps, real-time PWAs, and secure TypeScript products.',
        locale: 'en_US',
        canonical: 'https://hou12.me/',
    },
    fr: {
        title: 'Houssam Hamrouni | Ingenieur Logiciel IA & Web3',
        description: 'Portfolio de Houssam Hamrouni, ingenieur logiciel full-stack construisant des systemes IA, apps Web3, PWA temps reel et produits TypeScript securises.',
        locale: 'fr_FR',
        canonical: 'https://hou12.me/?lang=fr',
    },
};

function setMeta(selector: string, content: string) {
    const element = document.querySelector<HTMLMetaElement>(selector);
    if (element) element.content = content;
}

function updateSeoHead(language: Language) {
    const seo = SEO_BY_LANGUAGE[language];
    document.title = seo.title;
    setMeta('meta[name="title"]', seo.title);
    setMeta('meta[name="description"]', seo.description);
    setMeta('meta[property="og:title"]', seo.title);
    setMeta('meta[property="og:description"]', seo.description);
    setMeta('meta[property="og:locale"]', seo.locale);
    setMeta('meta[property="twitter:title"]', seo.title);
    setMeta('meta[property="twitter:description"]', seo.description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = seo.canonical;
}

function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split('.');
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path; // Return the key if translation not found
        }
    }

    return typeof current === 'string' ? current : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        const urlLang = new URLSearchParams(window.location.search).get('lang');
        if (urlLang === 'fr' || urlLang === 'en') return urlLang;
        const saved = localStorage.getItem('language');
        return (saved === 'fr' || saved === 'en') ? saved : 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        updateSeoHead(language);
        const params = new URLSearchParams(window.location.search);
        if (language === 'fr') {
            params.set('lang', 'fr');
        } else {
            params.delete('lang');
        }
        const query = params.toString();
        const newUrl = window.location.pathname + (query ? `?${query}` : '') + window.location.hash;
        if (newUrl !== window.location.pathname + window.location.search + window.location.hash) {
            window.history.replaceState({}, '', newUrl);
        }
    }, [language]);

    const t = (key: string): string => {
        return getNestedValue(translations[language] as unknown as Record<string, unknown>, key);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
