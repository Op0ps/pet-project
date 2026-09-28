import { useSelector } from 'react-redux';
import { selectLanguage } from '../../entities/real-estate';

const EROR_LABEL_LOAD = {
    ru: 'Ошибка загрузки недвижимости',
    en: 'Error loading real estate',
    fr: 'Emlak verileri yüklenemedi',
    tr: "Erreur de chargement de l'immobilier",
};

export const ErrorLoadEstate = () => {
    const language = useSelector(selectLanguage);
    const text = EROR_LABEL_LOAD[language];

    return (
        <main className="grow flex items-center justify-center">
            <div className="p-2 text-red-400">{text}</div>
        </main>
    );
};
