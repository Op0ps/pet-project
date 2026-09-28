import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
    EstateResponse,
    EstateDetailsResponse,
    EstateDetailsRequest,
} from './types';
import type { Language } from '../../../shared/types';

export const realEstateApi = createApi({
    reducerPath: 'realEstateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost/',
        // baseUrl: 'http://your_website/',
    }),
    endpoints: (build) => ({
        getEstatePreview: build.query<EstateResponse, Language>({
            query: (language: Language) => ({
                url: 'estate',
                params: { language },
            }),
        }),
        getEstateDetails: build.query<
            EstateDetailsResponse,
            EstateDetailsRequest
        >({
            query: ({ id, language }) => ({
                url: `estate/${id}`,
                params: { language },
            }),
        }),
    }),
});
