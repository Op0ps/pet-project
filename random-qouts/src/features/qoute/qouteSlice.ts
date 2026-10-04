import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IQoute {
    id: number;
    text: string;
    authorId: number | undefined;
    authorName: string | undefined;
    source: string;
}
type IInitialState = Partial<IQoute>;

const initialState: IInitialState = {
    id: undefined,
    authorId: undefined,
    authorName: undefined,
    source: undefined,
    text: undefined,
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
            state.authorName = action.payload.authorName;
        },
    },
});

export const { setQoute } = qouteSlice.actions;

export default qouteSlice.reducer;
