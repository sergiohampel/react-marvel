import { useSelector } from "react-redux";

import {
  selectCharacters,
  selectLoadingCharacters,
  selectLoadedCharacters,
  selectSearchedTerm,
} from "../../store/selectors";

export const useCharacterSelector = () => {
  const characters = useSelector(selectCharacters);
  const loadingCharacters = useSelector(selectLoadingCharacters);
  const loadedCharacters = useSelector(selectLoadedCharacters);
  const searchedTerm = useSelector(selectSearchedTerm);

  return {
    characters,
    loadingCharacters,
    loadedCharacters,
    searchedTerm,
  };
};
