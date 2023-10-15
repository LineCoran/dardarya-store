import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import modalReducer from './modalSlice';
import { apiSlice } from '../core/api/apiSlice';

const store = configureStore({
  reducer: {
    productReducer,
    modalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
