'use client';

import { useLanguageContext } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { TranslationKeys } from '../translations/en';

export function useTranslation() {
    const { language, setLanguage } = useLanguageContext();
    const translations = getTranslation(language);

    // Helper function for nested translation access
    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                console.warn(`Translation missing for key: ${key}`);
                return key;
            }
        }

        return value as string;
    };

    return {
        t,
        language,
        setLanguage,
        translations,
    };
}
