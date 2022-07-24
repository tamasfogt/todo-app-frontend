import DefaultLayout from "../DefaultLayout";
import { render } from "@testing-library/react";

test("renders default layout", () => {
  render(<DefaultLayout>Child content</DefaultLayout>);
});
