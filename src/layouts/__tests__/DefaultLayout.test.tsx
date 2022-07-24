import DefaultLayout from "../DefaultLayout";
import { render } from "@testing-library/react";

test("renders learn react link", () => {
  render(<DefaultLayout>Child content</DefaultLayout>);
});
