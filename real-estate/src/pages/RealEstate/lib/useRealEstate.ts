import { useParams } from 'react-router';
import data_estates from '../../../../data/data.json';
// import { realEstateApi, selectLanguage } from '../../../entities/real-estate';
// import { skipToken } from '@reduxjs/toolkit/query';
// import { useSelector } from 'react-redux';

export const useRealEstate = () => {
    const { id } = useParams<{ id: string }>();
    // const language = useSelector(selectLanguage);
    // const arg = id && language ? { id, language } : skipToken;
    // const { data, isLoading, isError } = realEstateApi.useGetEstateDetailsQuery(arg);

    if (id) {
        const item = data_estates[Number(id)]!;

        const estate = {
            data: { data: item },
            isLoading: false,
            isError: false,
        };
        return estate;
    } else {
        const estate = {
            data: { data: undefined },
            isLoading: false,
            isError: true,
        };
        return estate;
    }
};
