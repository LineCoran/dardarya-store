import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  status: string;
  price: string;
  weight: string;
  delivery: string;
};

type ProductState = {
  product: Product[];
};

enum KeyOfProduct {
  price = 'price',
  weight = 'weight',
  delivery = 'delivery',
}

const initialState: ProductState = {
  product: [
    {
      id: 0,
      status: 'default',
      price: '',
      weight: '',
      delivery: '',
    },
  ],
};

const productSLice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<boolean>) {
      const currentState = state;
      if (action.payload) {
        currentState.product.push({
          id: state.product.length,
          status: 'default',
          price: '',
          weight: '',
          delivery: '',
        });
      }
    },

    clearProducts(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        const currentState = state;
        currentState.product = [];
      }
    },

    changeProductValue(
      state,
      action: PayloadAction<{ id: number; key: KeyOfProduct; value: string }>,
    ) {
      const newValue = action.payload.value;
      const currentState = state;
      currentState.product[action.payload.id][action.payload.key] = newValue;
    },
    changeProductStatusSlice(state, action: PayloadAction<{ id: number; newStatus: string }>) {
      const currentState = state;
      currentState.product[action.payload.id].status = action.payload.newStatus;
    },
  },
});

export const { addProduct, clearProducts, changeProductStatusSlice, changeProductValue } =
  productSLice.actions;
export default productSLice.reducer;
