'use client';

import { useLanguageContext } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { TranslationKeys } from '../translations/en';

export function useTranslation() {
    const { language, setLanguage } = useLanguageContext();
    const translations = getTranslation(language);

    // Helper function for nested translation access
    const t = (key: string, placeholders?: Record<string, string | number>): any => {
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                console.warn(`Translation missing for key: ${key}`);
                return key;
            }
        }

        if (typeof value === 'string' && placeholders) {
            let result = value;
            Object.entries(placeholders).forEach(([k, v]) => {
                result = result.replace(new RegExp(`{${k}}`, 'g'), String(v));
            });
            return result;
        }

        return value;
    };

    return {
        t,
        language,
        setLanguage,
        translations,
    };
}
