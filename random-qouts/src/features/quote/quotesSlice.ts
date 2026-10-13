import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IInitialState, QuotesJson } from './IQuote';

const initialState: IInitialState = {
    quotes: [],
};

export const quotesSlice = createSlice({
    initialState,
    name: 'quotes',
    reducers: {
        setQuotes: (state, action: PayloadAction<QuotesJson>) => {
            state.quotes = action.payload;
        },
    },
});

export const { setQuotes } = quotesSlice.actions;
export default quotesSlice.reducer;
