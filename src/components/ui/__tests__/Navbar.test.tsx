import React from "react";
import { render } from "@testing-library/react";
import { Navbar } from "../Navbar";

test("renders navbar", () => {
  render(<Navbar />);
});
