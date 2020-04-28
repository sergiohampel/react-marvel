import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

const Search = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (value) {
      handleSearch(value);
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faSearch} />
      <S.Input placeholder="Search" onChange={handleChange} />
      <S.Button type="submit">Search</S.Button>
    </S.SearchForm>
  );
};

export default Search;
