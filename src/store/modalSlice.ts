import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Modal = {
  isOpen: boolean;
};

const initialState: Modal = {
    isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModalVisible(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    },
    }
  }
);

export const {
    changeModalVisible,
} = modalSlice.actions;
export default modalSlice.reducer;