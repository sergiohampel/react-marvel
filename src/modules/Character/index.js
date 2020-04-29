import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import reducer from "./store/reducer";

import {
  loadCharacters,
  loadCharactersSuccess,
  updateSearchedTerm,
} from "./store/actions-creators";

import {
  selectCharacters,
  selectLoadingCharacters,
  selectLoadedCharacters,
  selectSearchedTerm,
} from "./store/selectors";

import * as S from "./styles";

import Search from "./components/Search";
import Card from "./components/Card";

import { getCharacters } from "./services/api/";

const Character = () => {
  const characters = useSelector(selectCharacters);
  const loadingCharacters = useSelector(selectLoadingCharacters);
  const loadedCharacters = useSelector(selectLoadedCharacters);
  const searchedTerm = useSelector(selectSearchedTerm);

  const dispatch = useDispatch();

  const load = useCallback(
    async (name) => {
      dispatch(loadCharacters());

      const data = await getCharacters(name);

      dispatch(loadCharactersSuccess(data.results));
    },
    [dispatch]
  );

  useEffect(() => {
    load(searchedTerm);
  }, [load, searchedTerm]);

  function handleSearch(value) {
    if (searchedTerm !== value) {
      dispatch(updateSearchedTerm(value));
    } else {
      load(value);
    }
  }

  const history = useHistory();

  function openDetails(id) {
    history.push(`/characters/${id}`);
  }

  return (
    <>
      <S.Header>
        <S.Title>
          Marvel <span>Characters</span>
        </S.Title>

        <Search handleSearch={handleSearch} />
      </S.Header>

      {!loadingCharacters && loadedCharacters && (
        <S.Characters>
          {characters.map((character) => (
            <li key={character.id} onClick={() => openDetails(character.id)}>
              <Card character={character} />
            </li>
          ))}

          {!characters.length && <li>Empty result</li>}
        </S.Characters>
      )}

      {loadingCharacters && !loadedCharacters && (
        <S.Loading>Loading...</S.Loading>
      )}
    </>
  );
};

export default {
  routeProps: {
    path: "/",
    component: Character,
    exact: true,
  },
  name: "Character",
  store: {
    name: "characters",
    reducer,
  },
};
