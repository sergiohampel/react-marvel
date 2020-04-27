import React from "react";

import * as S from "./styles";

const Card = ({ character }) => {
  return (
    <S.Card
      url={`${character.thumbnail.path}.${character.thumbnail.extension}`}
    >
      <h2>{character.name}</h2>
    </S.Card>
  );
};

export default Card;
