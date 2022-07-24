import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todos/todos.slice";
import todoGroupsReducer from "./todo-groups/todo-groups.slices";
// TODO add redux logger

const persistConfig = {
  key: "todoAppStore",
  version: 1,
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ todos: todosReducer, todoGroups: todoGroupsReducer })
);
const store = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  return store;
};

export default store;
