import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoGroup, SliceState } from "./types";

const INITIAL_STATE: SliceState = {
  todoGroups: [
    { id: 1, title: "aaa", hidden: false },
    { id: 2, title: "bbb", hidden: true },
  ],
};
const todoGroupsSlice = createSlice({
  name: "todoGroups",
  initialState: INITIAL_STATE,
  reducers: {
    addTodoGroup(state, { payload }: PayloadAction<TodoGroup>) {
      state.todoGroups.push(payload);
    },
    toggleHidden(state, { payload }: PayloadAction<number>) {
      let groupId: number = payload;
      let group: TodoGroup | undefined = state.todoGroups.find(
        (group) => group.id === groupId
      );
      if (group) {
        group.hidden = !group.hidden;
      }
    },
    deleteTodoGroup(state, { payload }: PayloadAction<number>) {
      let groupId: number = payload;
      state.todoGroups = state.todoGroups.filter(
        (group) => group.id !== groupId
      );
    },
  },
});

export const { addTodoGroup, toggleHidden, deleteTodoGroup } =
  todoGroupsSlice.actions;

export default todoGroupsSlice.reducer;
