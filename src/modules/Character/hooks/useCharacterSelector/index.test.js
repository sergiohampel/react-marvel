import React from "react";
import { Provider } from "react-redux";
import { renderHook } from "@testing-library/react-hooks";

import store from "../../../../store/";

import { useCharacterSelector } from "./index";

describe("Test for useCharacterSelector", () => {
  it("Should use character selector", () => {
    const { result } = renderHook(() => useCharacterSelector(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.characters).toEqual([]);
    expect(result.current.loadingCharacters).toBe(false);
    expect(result.current.loadedCharacters).toBe(false);
    expect(result.current.searchedTerm).toEqual("captain");
  });
});
