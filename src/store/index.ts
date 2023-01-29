import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    productReducer,
    modalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;