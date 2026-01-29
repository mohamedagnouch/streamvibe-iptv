export type Language = 'en' | 'de';

export interface LanguageConfig {
    code: Language;
    name: string;
    nativeName: string;
    flag: string;
}

export const languages: Record<Language, LanguageConfig> = {
    en: {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        flag: '🇺🇸',
    },
    de: {
        code: 'de',
        name: 'German',
        nativeName: 'Deutsch',
        flag: '🇩🇪',
    },
};

export const defaultLanguage: Language = 'en';
