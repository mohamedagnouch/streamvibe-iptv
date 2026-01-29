'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, defaultLanguage } from '../i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(defaultLanguage);
    const [mounted, setMounted] = useState(false);

    // Initialize language from localStorage or browser
    useEffect(() => {
        setMounted(true);

        // Try to get saved preference
        const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;

        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
            setLanguageState(savedLanguage);
        } else {
            // Fallback to browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('de')) {
                setLanguageState('de');
            } else {
                setLanguageState('en');
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);

        // Update html lang attribute
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
        }
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguageContext() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
}
