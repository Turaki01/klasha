import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import SearchInput from "components/Search";

test("Search component exist", () => {
  render(<SearchInput />);

  const searchInput = screen.getByRole("textbox");

  expect(searchInput).toBeInTheDocument();
});

test("Users can search on the search component", () => {
  render(<SearchInput />);

  const searchInput = screen.getByRole("textbox");

  user.click(searchInput);
  user.keyboard("search");
  expect(searchInput).toHaveValue("search");
});
