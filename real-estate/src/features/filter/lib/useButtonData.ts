import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../entities/real-estate';

const LABELS = {
    ru: {
        1: 'Отели',
        2: 'Апартаменты',
        3: 'Квартиры',
        4: 'Пентхаусы',
        5: 'Виллы',
        6: 'Участки',
        7: 'Коммерческая недвижимость',
    },
    en: {
        1: 'Hotels',
        2: 'Apartments',
        3: 'Flats',
        4: 'Penthouses',
        5: 'Villas',
        6: 'Land plots',
        7: 'Commercial property',
    },
    tr: {
        1: 'Oteller',
        2: 'Daireler',
        3: 'Daireler',
        4: 'Çatı katları',
        5: 'Villalar',
        6: 'Arsalar',
        7: 'Ticari gayrimenkul',
    },
    fr: {
        1: 'Hôtels',
        2: 'Appartements',
        3: 'Appartements',
        4: 'Penthouses',
        5: 'Villas',
        6: 'Terrains',
        7: 'Immobilier commercial',
    },
};

const BASE_BUTTONS = [
    { estatePart: 1, category: 'hotels' },
    { estatePart: 2, category: 'apartments' },
    { estatePart: 3, category: 'quarters' },
    { estatePart: 4, category: 'penthouses' },
    { estatePart: 5, category: 'villas' },
    { estatePart: 6, category: 'lots' },
    { estatePart: 7, category: 'commercial-property' },
] as const;

export const useButtonData = () => {
    const language = useSelector(selectLanguage);

    const labels = LABELS[language];

    return BASE_BUTTONS.map((item) => ({
        ...item,
        label: labels[item.estatePart],
    }));
};
