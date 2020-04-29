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

export const loadCharacterDetails = () => ({
  type: LOAD_CHARACTER_DETAILS,
});

export const loadCharacterDetailsSuccess = (payload) => ({
  type: LOAD_CHARACTER_DETAILS_SUCCESS,
  payload,
});

export const loadCharacterDetailsError = (error) => ({
  type: LOAD_CHARACTER_DETAILS_ERROR,
  error,
});

export const resetDetails = () => ({
  type: RESET_DETAILS,
});
