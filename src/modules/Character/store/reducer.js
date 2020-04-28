import createReducer from "../../../store/create-reducer";

import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_ERROR,
  UPDATE_SEARCHED_TERM,
} from "./action-types";

const initialState = {
  characters: [],
  searchedTerm: "a",
  loadingCharacters: false,
  loadedCharacters: false,
  charactersError: null,
};

const reduce = createReducer(initialState, {
  [LOAD_CHARACTERS]: (state) => ({
    ...state,
    loadingCharacters: true,
    loadedCharacters: false,
  }),

  [LOAD_CHARACTERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loadingCharacters: false,
    loadedCharacters: true,
    characters: payload,
  }),

  [LOAD_CHARACTERS_ERROR]: (state, { error }) => ({
    ...state,
    loadingCharacters: false,
    loadedCharacters: false,
    charactersError: error,
  }),

  [UPDATE_SEARCHED_TERM]: (state, { term }) => ({
    ...state,
    searchedTerm: term,
  }),
});

export default reduce;
