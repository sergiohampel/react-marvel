import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";

import Search from "./components/Search/";

const mockFn = jest.fn();

describe("Test for Search component", () => {
  it("Should run the handleSearch function with the searched term as parameter", async () => {
    const { getByTestId } = render(<Search handleSearch={mockFn} />);

    const searchField = await waitForElement(() => getByTestId("search-field"));

    const searchTerm = "adam";

    fireEvent.change(searchField, {
      target: {
        value: searchTerm,
      },
    });

    expect(searchField.value).toEqual(searchTerm);

    const searchButton = await waitForElement(() =>
      getByTestId("search-button")
    );

    fireEvent.click(searchButton);

    expect(mockFn).toBeCalledWith(searchTerm);
  });
});
