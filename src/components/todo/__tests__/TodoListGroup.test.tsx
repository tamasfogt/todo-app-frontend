import React from "react";
import { render } from "@testing-library/react";
import TodoListGroup from "../TodoListGroup";

test("renders todo list group", () => {
  render(<TodoListGroup id={1} />);
});
