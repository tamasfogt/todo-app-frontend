import React from "react";
import { render } from "@testing-library/react";
import TodoList from "../TodoList";

test("renders todo list", () => {
  render(<TodoList />);
});
