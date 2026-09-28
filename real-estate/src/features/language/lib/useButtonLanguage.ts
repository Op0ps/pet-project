import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage, setLanguage } from '../../../entities/real-estate';
import type { LanguageButton } from '../types';
import type { Language } from '../../../shared/types';

const BUTTON_LANGUAGE: LanguageButton[] = [
    { label: 'Ru', id: 'ru' },
    { label: 'En', id: 'en' },
    { label: 'Fr', id: 'fr' },
    { label: 'Tr', id: 'tr' },
];

export const useButtonLanguage = () => {
    const dispatch = useDispatch();
    const language = useSelector(selectLanguage);

    const handlerLanguage = (language: Language) => {
        dispatch(setLanguage(language));
    };

    return { BUTTON_LANGUAGE, language, handlerLanguage };
};
