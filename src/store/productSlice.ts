import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Sites from '../enums/enums';

type Product = {
  id: number;
  status: string;
  price: string;
  delivery: string;
  weight: string;
};

type ProductState = {
  product: {
    alibaba: Product[],
    taobao: Product[],
  };
};

enum KeyOfProduct {
  price = 'price',
  weight = 'weight',
  delivery = 'delivery',
}

const initialState: ProductState = {
  product:  {
    alibaba: [
    ],
    taobao: [
    ],
  } 
};

const productSLice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Sites>) {
      const currentState = state;
      const site = action.payload;
      currentState.product[site].push({
        id: state.product[site].length,
        status: 'default',
        price: '',
        weight: '',
        delivery: '',
      });
    },

    clearProducts(state, action: PayloadAction<Sites>) {
      const site = action.payload
      const currentState = state;
      currentState.product[site] = [];
    },

    changeProductValue(
      state,
      action: PayloadAction<{ id: number; key: KeyOfProduct; value: string; sites: Sites }>,
    ) {
      const newValue = action.payload.value;
      const currentState = state;
      const site = action.payload.sites;
      currentState.product[site][action.payload.id][action.payload.key] = newValue;
    },
    changeProductStatusSlice(state, action: PayloadAction<{ id: number; newStatus: string; sites: Sites }>) {
      const currentState = state;
      const site = action.payload.sites
      currentState.product[site][action.payload.id].status = action.payload.newStatus;
    },
  },
});

export const { addProduct, clearProducts, changeProductStatusSlice, changeProductValue } =
  productSLice.actions;
export default productSLice.reducer;
