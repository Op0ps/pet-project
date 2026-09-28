import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../entities/real-estate';

const LABEL = {
    ru: 'Нет объектов недвижимости',
    en: 'No listings found',
    fr: 'Aucune annonce trouvée',
    tr: 'Listeleme bulunamadı',
};

export const EmtyEstate = () => {
    const language = useSelector(selectLanguage);
    const text = LABEL[language];

    return (
        <main className="grow flex items-center justify-center">
            <div className="p-2 text-white">{text}</div>
        </main>
    );
};
