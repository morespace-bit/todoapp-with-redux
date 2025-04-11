import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../feature/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
