export const selectCharacters = (state) => state.characters.characters;

export const selectLoadingCharacters = (state) =>
  state.characters.loadingCharacters;

export const selectLoadedCharacters = (state) =>
  state.characters.loadedCharacters;

export const selectSearchedTerm = (state) => state.characters.searchedTerm;
