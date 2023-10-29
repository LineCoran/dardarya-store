import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import modalReducer from './modalSlice';
import menuSlice from './menuSlice';
import { apiSlice } from '../core/api/apiSlice';

const store = configureStore({
  reducer: {
    productReducer,
    modalReducer,
    menuSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
