import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DaySelector from "components/DaySelector";

test("Day selector component exist", () => {
  const dayElement = {
    name: "7",
    value: "7"
  };
  const mock = jest.fn();
  render(
    <DaySelector handleClick={mock} isActive={false} dayElement={dayElement} />
  );

  const selectorElement = screen.getByTestId("daySelectorEl");
  expect(selectorElement).toBeInTheDocument();
});

test("Day selector contains a value", () => {
  const dayElement = {
    name: "7",
    value: "7"
  };
  const mock = jest.fn();
  render(
    <DaySelector handleClick={mock} isActive={false} dayElement={dayElement} />
  );

  const selectorElement = screen.getByTestId("daySelectorEl");
  expect(selectorElement).toHaveTextContent("7");
});

test("Day selector should be clickable", () => {
  const dayElement = {
    name: "7",
    value: "7"
  };
  const mock = jest.fn();
  render(
    <DaySelector handleClick={mock} isActive={false} dayElement={dayElement} />
  );

  const selectorElement = screen.getByTestId("daySelectorEl");
  user.click(selectorElement);
  expect(mock).toBeCalled();
});
