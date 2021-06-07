import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
    },
    deleteItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    }
  }
});

export default cartSlice.reducer;
export const { addToCart, deleteItem } = cartSlice.actions;
