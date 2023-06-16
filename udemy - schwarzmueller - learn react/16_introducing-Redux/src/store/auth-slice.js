import { createSlice, configureStore } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
