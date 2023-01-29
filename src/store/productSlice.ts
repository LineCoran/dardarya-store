import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  status: string;
};

type ProductState = {
  product: Product[];
};

const initialState: ProductState = {
    product: [{
        id: 0,
        status: 'default',
     }
    ],
};

const productSLice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, _action: PayloadAction<boolean>) {
      state.product.push({
        id: state.product.length,
        status: 'default',
      });
    },

    clearProducts(state, action: PayloadAction<boolean>) {
        state.product = [];
    },

    changeProductStatusSlice(state, action: PayloadAction<{id: number, newStatus: string}>) {
      state.product[action.payload.id].status = action.payload.newStatus;
  }
  },
});

export const {
  addProduct,
  clearProducts,
  changeProductStatusSlice,
} = productSLice.actions;
export default productSLice.reducer;