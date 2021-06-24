import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "Visibility",
  initialState: {
    showCart: false,
    notification: null,
  },
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    clearNotification(state) {
      state.notification = null;
    },
  },
});

export const visibilityActions = visibilitySlice.actions;
