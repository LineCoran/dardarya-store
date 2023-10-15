import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Modal = {
  isOpen: boolean;
  usdValue: number;
};

const initialState: Modal = {
  isOpen: false,
  usdValue: 1,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModalVisible(state, action: PayloadAction<boolean>) {
      const currentState = state;
      currentState.isOpen = action.payload;
    },
    changeUsdSlice(state, action: PayloadAction<number>) {
      const currentState = state;
      currentState.usdValue = action.payload;
    },
  },
});

export const { changeModalVisible, changeUsdSlice } = modalSlice.actions;
export default modalSlice.reducer;
