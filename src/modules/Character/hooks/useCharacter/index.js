import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  loadCharacters,
  loadCharactersSuccess,
  updateSearchedTerm,
} from "../../store/actions-creators";

import { getCharacters } from "../../services/api/";

export const useCharacter = (searchedTerm) => {
  const dispatch = useDispatch();

  const load = useCallback(
    async (name) => {
      dispatch(loadCharacters());

      const data = await getCharacters(name);

      dispatch(loadCharactersSuccess(data.results));
    },
    [dispatch]
  );

  const updateTerm = (term) => dispatch(updateSearchedTerm(term));

  useEffect(() => {
    load(searchedTerm);
  }, [load, searchedTerm]);

  return {
    updateTerm,
    load,
  };
};
