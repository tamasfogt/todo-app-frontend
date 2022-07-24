import { createSelector } from "@reduxjs/toolkit";
import { Todo } from "./types";

const selectTodos = (state: any) => state.todos;

export const selectTodoList = createSelector(
  [selectTodos],
  (todosState) => todosState.todos
);

export const selectTodosByGroupId = (groupId: number) =>
  createSelector([selectTodoList], (todos) =>
    todos.filter((todo: Todo) => todo.group_id === groupId)
  );

export const selectTodoById = (id: number) =>
  createSelector([selectTodoList], (todos) =>
    todos.find((todo: Todo) => todo.id === id)
  );
