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
      state.isOpen = action.payload
    },
    changeUsdSlice(state, action: PayloadAction<number>) {
      state.usdValue = action.payload
    },
    }
  }
);

export const {
    changeModalVisible,
    changeUsdSlice
} = modalSlice.actions;
export default modalSlice.reducer;