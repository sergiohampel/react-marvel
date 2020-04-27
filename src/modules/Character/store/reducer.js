import createReducer from "../../../store/create-reducer";

import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_ERROR,
} from "./action-types";

const initialState = {
  characters: [],
  loadingCharacters: false,
  loadedCharacters: false,
  charactersError: null,
};

const reduce = createReducer(initialState, {
  [LOAD_CHARACTERS]: (state) => ({
    ...state,
    loadingCharacters: true,
  }),

  [LOAD_CHARACTERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loadingCharacters: false,
    loadedCharacters: true,
    characters: payload,
  }),

  [LOAD_CHARACTERS_ERROR]: (state, { error }) => ({
    ...state,
    charactersError: error,
  }),
});

export default reduce;
