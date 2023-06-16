import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { visibilitySlice } from "./visibility-slice";

const ReduxStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    visibility: visibilitySlice.reducer,
  },
});

export default ReduxStore;
