import { LANGUAGES, DEFAULT_LANGUAGE } from './constants';

export const validateLanguage = (language: string) => {
    if (!language) {
        return DEFAULT_LANGUAGE;
    }

    const languageCode = language.split('-')[0].toLowerCase();
    const isLangCode = LANGUAGES.some(
        ({ language }) => language === languageCode,
    );

    if (isLangCode) {
        return languageCode;
    }

    return DEFAULT_LANGUAGE;
};
