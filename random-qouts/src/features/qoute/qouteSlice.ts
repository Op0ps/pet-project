import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IQoute {
    id: number | null;
    text: string | null;
    authorId: number | null;
    source: string | null;
}

const initialState: IQoute = {
    id: null,
    authorId: null,
    source: null,
    text: null,
};

export const qouteSlice = createSlice({
    initialState,
    name: 'qoute',
    reducers: {
        setQoute: (state, action: PayloadAction<IQoute>) => {
            state.id = action.payload.id;
            state.authorId = action.payload.authorId;
            state.source = action.payload.source;
            state.text = action.payload.text;
        },
    },
});

export const { setQoute } = qouteSlice.actions;

export default qouteSlice.reducer;
