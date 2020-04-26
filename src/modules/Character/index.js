import React, { useState } from "react";

import Search from "../Common/Search/";
import Card from "./components/Card";

const Character = () => {
  const [characters] = useState([
    "Iron-Man",
    "Captain-Marvel",
    "Black-Panther",
    "Black-Widow",
    "Thor",
  ]);

  return (
    <>
      <h1>Character container</h1>

      <Search />

      <ul>
        {characters.map((character) => (
          <li key={character}>
            <Card name={character} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default {
  routeProps: {
    path: "/characters",
    component: Character,
    exact: true,
  },
  name: "Character",
};
