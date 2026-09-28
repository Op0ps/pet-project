import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectLanguage } from '../../../entities/real-estate';

const LABEL_BUTTON = {
    ru: 'Назад',
    en: 'Back',
    tr: 'Geri',
    fr: 'Retour',
};

export const BackButton = () => {
    const language = useSelector(selectLanguage);
    const text = LABEL_BUTTON[language];

    return (
        <Link
            to="/"
            className="p-1 rounded-md shadow-md shadow-gray-500 hover:bg-gray-400 bg-gray-500 text-white"
        >
            {text}
        </Link>
    );
};
