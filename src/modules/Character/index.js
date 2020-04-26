import React, { useState, useEffect } from "react";

import Search from "../Common/Search/";
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

  return (
    <>
      <h1>Character container</h1>

      <Search />

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Card name={character.name} />
          </li>
        ))}
      </ul>
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
