import React from "react";
import { useHistory } from "react-router-dom";

import reducer from "./store/reducer";

import { useCharacter } from "./hooks/useCharacter/";
import { useCharacterSelector } from "./hooks/useCharacterSelector/";

import * as S from "./styles";

import Search from "./components/Search";
import Card from "./components/Card";

const Character = () => {
  const {
    characters,
    loadingCharacters,
    loadedCharacters,
    searchedTerm,
  } = useCharacterSelector();

  const { load, updateTerm } = useCharacter(searchedTerm);

  function handleSearch(value) {
    if (searchedTerm !== value) {
      updateTerm(value);
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
        <S.Characters data-testid="characters-list">
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
