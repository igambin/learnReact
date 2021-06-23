import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action) {
      state.counter += +action.payload.step;
    },
    decrement(state, action) {
      state.counter -= +action.payload.step;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;
