import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

import Search from "./components/Search";
import Card from "./components/Card";

import { getCharacters } from "./services/api/";

const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      const data = await getCharacters();

      setCharacters(data.results);
    }

    loadCharacters();
  }, []);

  const history = useHistory();

  function openDetails(characterName) {
    history.push(`/characters/${characterName}`);
  }

  return (
    <>
      <S.Header>
        <S.Title>Marvel <span>Characters</span></S.Title>
        <Search />
      </S.Header>

      <S.Characters>
        {characters.map((character) => (
          <li key={character.id} onClick={() => openDetails(character.name)}>
            <Card character={character} />
          </li>
        ))}
      </S.Characters>
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
};
