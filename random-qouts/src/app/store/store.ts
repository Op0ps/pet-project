import { configureStore } from '@reduxjs/toolkit';
import authorsReducer from '../../features/author/authorsSlice';
import quotesReducer from '../../features/quote/quotesSlice';

const store = configureStore({
    reducer: {
        authors: authorsReducer,
        quotes: quotesReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
