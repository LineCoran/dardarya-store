import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Modal = {
  isOpen: boolean;
};

const initialState: Modal = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeMenuVisible(state, action: PayloadAction<boolean>) {
      const currentState = state;
      currentState.isOpen = action.payload;
    },
  },
});

export const { changeMenuVisible, } = menuSlice.actions;
export default menuSlice.reducer;
