import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "Visibility",
  initialState: {
    showCart: false,
  },
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const visibilityActions = visibilitySlice.actions;
