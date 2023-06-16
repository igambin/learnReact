import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    showCounter: true,
  },
  reducers: {
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const visibilityActions = visibilitySlice.actions;
