import { Language } from '../i18n';
import { en } from './en';
import { de } from './de';

export const translations = {
    en,
    de,
};

export function getTranslation(language: Language) {
    return translations[language] || translations.en;
}
