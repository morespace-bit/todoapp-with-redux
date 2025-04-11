import { combineReducers, configureStore } from "@reduxjs/toolkit";
export const CounStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
