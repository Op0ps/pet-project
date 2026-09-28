import { validateLanguage } from './validateLanguage';

export const getLanguageSystem = () => {
    const browserLanguage = navigator?.language;

    const lang = validateLanguage(browserLanguage);

    return { language: lang };
};
