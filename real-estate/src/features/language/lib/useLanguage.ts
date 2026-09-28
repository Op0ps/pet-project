import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { useDispatch } from 'react-redux';

import { setLanguage } from '../../../entities/real-estate';
import type { Language } from '../../../shared/types';

export const useSyncLanguage = () => {
    const { language } = useLoaderData<{ language: Language }>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (language) {
            dispatch(setLanguage(language));

            const htmlElement = document.documentElement;
            htmlElement.setAttribute('lang', language);

            switch (language) {
                case 'en':
                    document.title =
                        'Luxury real estate for sale on the southern coast of Crimea';
                    break;

                case 'tr':
                    document.title =
                        "Kırım'ın güney sahilinde lüks emlak satılık";
                    break;

                case 'fr':
                    document.title =
                        'Propriétés de prestige en vente sur la côte sud de la Crimée';
                    break;

                default:
                    document.title =
                        'Элитная недвижимость на южном побережье Крыма';
                    break;
            }
        }
    }, [language, dispatch]);
};
