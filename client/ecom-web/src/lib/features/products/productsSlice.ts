import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/productInfo.type';

// Define a type for the slice state
type ProductsState = {
  products: IProduct[] | null;
  status: string;
};
// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
  status: 'idle',
};
export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.status = 'loading';
      state.products = action.payload;
      state.status = 'succeeded';
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
