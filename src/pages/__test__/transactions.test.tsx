import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Transactions from "pages/transactions";
import SearchInput from "components/Search";
import Button from "components/Button";

test("Transaction Header exist", () => {
  render(<Transactions />);

  const header = screen.getByRole("heading", { name: /transaction history/i });

  expect(header).toBeInTheDocument();
});

test("Transaction search exist and users can search", () => {
  render(<SearchInput />);

  const searchInput = screen.getByRole("textbox");

  user.click(searchInput);
  user.keyboard("test");

  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveValue("test");
});

test("Transaction CTA exist: users can export", () => {
  const mock = jest.fn();
  render(<Button label="Export" onClick={mock} />);

  const exportButton = screen.getByRole("button", { name: /export/i });

  user.click(exportButton);

  expect(mock).toHaveBeenCalled();
});

test("Transaction CTA exist: users can filter", () => {
  render(<Transactions />);

  const filterButton = screen.getByTestId("txnFilter");
  expect(filterButton).toBeInTheDocument();
});
//
