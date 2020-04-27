import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import reducer from "./store/reducer";
import {
  loadCharacters,
  loadCharactersSuccess,
} from "./store/actions-creators";

import * as S from "./styles";

import Search from "./components/Search";
import Card from "./components/Card";

import { getCharacters } from "./services/api/";

const Character = () => {
  const characters = useSelector((state) => state.characters.characters);
  const loadingCharacters = useSelector(
    (state) => state.characters.loadingCharacters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCharacters());

    async function load() {
      const data = await getCharacters();

      dispatch(loadCharactersSuccess(data.results));
    }

    load();
  }, [dispatch]);

  const history = useHistory();

  function openDetails(characterName) {
    history.push(`/characters/${characterName}`);
  }

  return (
    <>
      <S.Header>
        <S.Title>
          Marvel <span>Characters</span>
        </S.Title>
        <Search />
      </S.Header>

      {loadingCharacters && <S.Loading>Loading...</S.Loading>}

      {!loadingCharacters && (
        <S.Characters>
          {characters.map((character) => (
            <li key={character.id} onClick={() => openDetails(character.name)}>
              <Card character={character} />
            </li>
          ))}
        </S.Characters>
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
