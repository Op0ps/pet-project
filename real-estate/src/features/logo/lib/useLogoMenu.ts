import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    addEstates,
    realEstateApi,
    selectLanguage,
    setError,
    setEstatePart,
    setLoading,
} from '../../../entities/real-estate';

const LABEL = {
    ru: 'НЕДВИЖИМОСТЬ',
    en: 'REAL ESTATE',
    tr: 'GAYRİMENKUL',
    fr: 'IMMOBILIER',
};

export const useLogoMenu = () => {
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    const { data, isError, isLoading } =
        realEstateApi.useGetEstatePreviewQuery(language);

    useEffect(() => {
        if (data?.data) {
            dispatch(addEstates(data.data));
        }

        dispatch(setLoading(isLoading));
        dispatch(setError(isError));
    }, [data, isError, isLoading, dispatch]);

    const handlerEstatePatr = () => {
        dispatch(setEstatePart(0));
    };

    return { handlerEstatePatr, headerText: LABEL[language] };
};
