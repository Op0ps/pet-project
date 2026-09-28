import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { InitialState, EstateItem } from './types';
import type { Language } from '../../../shared/types';

const initialState: InitialState = {
    estatePart: 0,
    language: 'ru',
    estates: [],
    isError: false,
    isLoading: false,
};

export const realEstateSlice = createSlice({
    name: 'realEstate',
    initialState,
    reducers: {
        setEstatePart: (state, action: PayloadAction<number>) => {
            state.estatePart = action.payload;
        },
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload;
        },
        addEstates: (state, action: PayloadAction<EstateItem[]>) => {
            state.estates = action.payload;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { addEstates, setEstatePart, setError, setLoading, setLanguage } =
    realEstateSlice.actions;
