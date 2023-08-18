import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({});

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState({}),
  reducers: {
    addItem: cartAdapter.addOne,
    removeItem: cartAdapter.removeOne,
  },
});

export const selectors = cartAdapter.getSelectors((state) => state.cart);
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
