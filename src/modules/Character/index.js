import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import reducer from "./store/reducer";

import * as S from "./styles";

import Search from "./components/Search";
import Card from "./components/Card";

import { getCharacters } from "./services/api/";

const Character = () => {
  const [characters, setCharacters] = useState([]);

  const todo = useSelector((state) => state.characters);
  const dispath = useDispatch();

  useEffect(() => {
    async function loadCharacters() {
      const data = await getCharacters();

      setCharacters(data.results);
    }

    loadCharacters();
  }, []);

  // const history = useHistory();

  function openDetails(characterName) {
    dispath({ type: "increment" });
    // history.push(`/characters/${characterName}`);
  }

  return (
    <>
      <S.Header>
        <S.Title>
          Marvel <span>Characters - {todo}</span>
        </S.Title>
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
  store: {
    name: "characters",
    reducer,
  },
};
