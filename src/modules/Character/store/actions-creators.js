import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_ERROR,
  UPDATE_SEARCHED_TERM,
} from "./action-types";

export const loadCharacters = () => ({
  type: LOAD_CHARACTERS,
});

export const loadCharactersSuccess = (payload) => ({
  type: LOAD_CHARACTERS_SUCCESS,
  payload,
});

export const loadCharactersError = (error) => ({
  type: LOAD_CHARACTERS_ERROR,
  error,
});

export const updateSearchedTerm = (term) => ({
  type: UPDATE_SEARCHED_TERM,
  term,
});
