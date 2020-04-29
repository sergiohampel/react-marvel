import createReducer from "../../../store/create-reducer";

import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_ERROR,
  UPDATE_SEARCHED_TERM,
  LOAD_CHARACTER_DETAILS,
  LOAD_CHARACTER_DETAILS_SUCCESS,
  LOAD_CHARACTER_DETAILS_ERROR,
  RESET_DETAILS,
} from "./action-types";

const initialDetails = () => ({
  thumbnail: null,
  series: {
    items: [],
  },
});

const initialState = () => ({
  characters: [],
  searchedTerm: "captain",
  loadingCharacters: false,
  loadedCharacters: false,
  charactersError: null,
  details: initialDetails(),
  loadingDetails: false,
  detailsError: null,
});

const reduce = createReducer(initialState(), {
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

  [LOAD_CHARACTER_DETAILS]: (state) => ({
    ...state,
    loadingDetails: true,
  }),

  [LOAD_CHARACTER_DETAILS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loadingDetails: false,
    details: payload,
  }),

  [LOAD_CHARACTER_DETAILS_ERROR]: (state, { error }) => ({
    ...state,
    loadingDetails: false,
    detailsError: error,
  }),

  [RESET_DETAILS]: (state) => ({
    ...state,
    details: initialDetails(),
    detailsError: null,
  }),
});

export default reduce;
