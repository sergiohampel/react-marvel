import styled from "styled-components";

export const Characters = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  margin: 30px;
`;

export const Title = styled.h1`
  font-family: "RobotoCondensed";
  font-size: 5rem;
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
`;
