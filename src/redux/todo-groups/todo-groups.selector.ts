import { createSelector } from "@reduxjs/toolkit";
import { TodoGroup } from "./types";

const selectTodoGroups = (state: any) => state.todoGroups; // TODO any

export const selectTodoGroupsList = createSelector(
  [selectTodoGroups],
  (todoGroupsState) => todoGroupsState.todoGroups
);
export const selectTodoGroup = (id: number) =>
  createSelector([selectTodoGroupsList], (groups) =>
    groups.find((group: TodoGroup) => group.id === id)
  );
