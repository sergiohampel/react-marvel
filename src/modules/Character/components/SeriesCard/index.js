import React from "react";

import * as S from "./styles";

const SeriesCard = ({ serie }) => {
  return (
    <S.SeriesCard>
      <S.SeriesCardImage
        src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
        alt={serie.thumbnail.title}
      />

      <S.SeriesCardTitle>{serie.title}</S.SeriesCardTitle>
    </S.SeriesCard>
  );
};

export default SeriesCard;
