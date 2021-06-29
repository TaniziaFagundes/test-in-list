import { render, screen } from "@testing-library/react";
import Input from "../components/input";

test("render input test", () => {
  render(<Input />);
  expect(screen.getByRole("button")).toBeDisabled();
});
