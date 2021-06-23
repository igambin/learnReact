import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-slice";
import { counterSlice } from "./counter-slice";
import { visibilitySlice } from "./visibility-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    visibility: visibilitySlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
