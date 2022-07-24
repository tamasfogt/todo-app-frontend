import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Todo, SliceState } from "./types";

const INITIAL_STATE: SliceState = {
  todos: [
    { id: 1, group_id: 1, name: "Todo 1" },
    { id: 2, group_id: 1, name: "Todo 2" },
    { id: 3, group_id: 2, name: "Todo 3" },
  ],
};
const todosSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload); // TODO
    },
    deleteTodo(state, { payload }: PayloadAction<number>) {
      let todoId: number = payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
