export const selectCharacters = (state) => state.characters.characters;

export const selectLoadingCharacters = (state) =>
  state.characters.loadingCharacters;

export const selectLoadedCharacters = (state) =>
  state.characters.loadedCharacters;

export const selectSearchedTerm = (state) => state.characters.searchedTerm;

export const selectCharacterDetails = (state) => state.characters.details;

export const selectCharacterDetailsThumb = (state) =>
  state.characters.details.thumbnail;

export const selectLoadingDetails = (state) => state.characters.loadingDetails;
