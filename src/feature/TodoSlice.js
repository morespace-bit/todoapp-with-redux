import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  change: "",
  edit: false,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newtodo } = action.payload;
      state.todos = state.todos.map((dos) => (dos.id === id ? newtodo : dos));
    },
    onchange: (state, action) => {
      state.change = action.payload;
    },
    setChangeText: (state, action) => {
      state.edit = true;
      console.log(state.edit);
      const text = state.todos.find((dos) => dos.id === action.payload);
      if (text) {
        state.change = text.text;
      }
    },
    saveChange: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      state.edit = false;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  onchange,
  setChangeText,
  saveChange,
} = TodoSlice.actions;

export default TodoSlice.reducer;
