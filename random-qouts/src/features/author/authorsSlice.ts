import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthorsJson, IInitialStateJSON } from './IAuthor';

const initialState: IInitialStateJSON = {
    authors: [],
};

export const authorsSlice = createSlice({
    initialState,
    name: 'authors',
    reducers: {
        setAuthors: (state, action: PayloadAction<AuthorsJson>) => {
            state.authors = action.payload;
        },
    },
});

export const { setAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
