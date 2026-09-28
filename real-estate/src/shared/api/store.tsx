import { configureStore } from '@reduxjs/toolkit';
import { realEstateApi, realEstateSlice } from '../../entities/real-estate';

export const store = configureStore({
    reducer: {
        realEstate: realEstateSlice.reducer,
        [realEstateApi.reducerPath]: realEstateApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(realEstateApi.middleware),
});
