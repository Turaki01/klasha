import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DropdownComponent from "components/DropdownComponent";
import { DropdownInterface } from "interfaces/util-interface";

test("Dropdown component exist", () => {
  const mock = jest.fn();
  render(
    <DropdownComponent
      dropdownOption={[]}
      selectedOption={""}
      handleChange={mock}
    />
  );

  const dropdownEl = screen.getByTestId("dropDownComponent");

  expect(dropdownEl).toBeInTheDocument();
});

test("Dropdown component is clickable", () => {
  const testValues: DropdownInterface[] = [
    {
      name: "user",
      value: "user"
    },
    {
      name: "address",
      value: "address"
    }
  ];
  const mock = jest.fn();
  render(
    <DropdownComponent
      dropdownOption={testValues}
      selectedOption={"user"}
      handleChange={mock}
    />
  );

  const dropdownTrigger = screen.getByTestId("dropDownComponentTrigger");
  const dropDownValue = screen.getByTestId("dropDownValue");
  user.click(dropdownTrigger);
  expect(dropDownValue).toBeInTheDocument();
  expect(dropDownValue).toHaveTextContent("user");
});
