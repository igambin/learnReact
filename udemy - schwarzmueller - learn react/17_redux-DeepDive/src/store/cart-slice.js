import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalItems = action.payload.totalItems;
      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action) {
      const items = state.cartItems;
      const item = items.filter((i) => i.id === action.payload.id);
      if (item[0]) {
        item[0].amount++;
        state.totalPrice += item[0].price;
      } else {
        items.unshift(action.payload);
        state.totalPrice += action.payload.price;
      }
      state.totalItems++;
    },
    increaseItemCount(state, action) {
      const items = state.cartItems;
      const item = items.filter((i) => i.id === action.payload);
      if (item[0]) {
        item[0].amount++;
        state.totalItems++;
        state.totalPrice += item[0].price;
      }
    },
    decreaseItemCount(state, action) {
      const items = state.cartItems;
      const item = items.filter((i) => i.id === action.payload);
      if (item[0]) {
        item[0].amount--;
        state.totalItems--;
        state.totalPrice -= item[0].price;
      }
      if (item[0].amount < 1) {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
    },
  },
});

export const cartActions = cartSlice.actions;
