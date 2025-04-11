import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
export const CountStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
