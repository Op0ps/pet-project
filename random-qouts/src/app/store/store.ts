import { configureStore } from '@reduxjs/toolkit';
import authorReducer from '../../features/author/authorSlice';
import qouteReducer from '../../features/qoute/qouteSlice';

const store = configureStore({
    reducer: {
        author: authorReducer,
        qoute: qouteReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
