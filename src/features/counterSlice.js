import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementValue } = counterSlice.actions;

export default counterSlice.reducer;
