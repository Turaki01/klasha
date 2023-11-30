import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "components/Button";

test("Button component exisit", () => {
  const mock = jest.fn();

  render(<Button label="test" onClick={mock} />);

  const button = screen.getByRole("button");

  user.click(button);

  expect(mock).toHaveBeenCalled();
});

test("Button loading state exisit", () => {
  render(<Button label="test" isLoading={true} />);

  const buttonLoader = screen.getByTestId("buttonLoader");

  expect(buttonLoader).toBeInTheDocument();
});

test("Button can be disabled", () => {
  render(<Button label="test" disabled={true} />);

  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});
