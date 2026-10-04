import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAuthor {
    id: number;
    name: string;
    bio: string;
    birthDay: string | null;
    deathDate: string | null;
}
type IInitialState = Partial<IAuthor>;

const initialState: IInitialState = {
    id: undefined,
    name: undefined,
    bio: undefined,
    birthDay: undefined,
    deathDate: undefined,
};

export const authorSlice = createSlice({
    initialState,
    name: 'author',
    reducers: {
        setAuthor: (state, action: PayloadAction<IAuthor>) => {
            state.id = action.payload.id;
            state.bio = action.payload.bio;
            state.birthDay = action.payload.birthDay;
            state.deathDate = action.payload.deathDate;
            state.name = action.payload.name;
        },
    },
});

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
