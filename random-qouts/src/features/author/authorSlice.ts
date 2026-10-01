import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAuthor {
    name: string | null;
    bio: string | null;
    birthDay: string | null;
    deathDate: string | null;
}

const initialState: IAuthor = {
    name: null,
    bio: null,
    birthDay: null,
    deathDate: null,
};

export const authorSlice = createSlice({
    initialState,
    name: 'author',
    reducers: {
        setAuthor: (state, action: PayloadAction<IAuthor>) => {
            state.bio = action.payload.bio;
            state.birthDay = action.payload.birthDay;
            state.deathDate = action.payload.deathDate;
            state.name = action.payload.name;
        },
    },
});

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
