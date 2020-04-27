import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

const Search = () => {
  return (
    <S.SearchIcon>
      <FontAwesomeIcon icon={faSearch} />
      <S.Input placeholder="Search" />
    </S.SearchIcon>
  );
};

export default Search;
