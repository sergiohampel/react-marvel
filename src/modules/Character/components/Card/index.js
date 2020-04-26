import React from "react";
import { useHistory } from "react-router-dom";

const Card = ({ name }) => {
  let history = useHistory();

  function openDetails(characterName) {
    history.push(`/characters/${characterName}`);
  }

  return <h1 onClick={() => openDetails(name)}>{name}</h1>;
};

export default Card;
