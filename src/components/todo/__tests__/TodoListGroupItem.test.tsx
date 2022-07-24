import React from "react";
import { render } from "@testing-library/react";
import TodoListGroupItem from "../TodoListGroupItem";

test("renders todo list group item", () => {
  render(<TodoListGroupItem id={1} />);
});
