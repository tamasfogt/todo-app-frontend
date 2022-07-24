import React from "react";
import { render } from "@testing-library/react";
import NavbarItem from "../NavbarItem";

test("renders navbar item", () => {
  render(<NavbarItem to="/home">Title</NavbarItem>);
});
