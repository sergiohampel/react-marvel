import styled from "styled-components";

export const Header = styled.header`
  margin: 0 10px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    margin: 0 20px;
    padding-top: 20px;
  }

  @media screen and (min-width: 960px) {
    margin: 0 30px;
    padding-top: 30px;
  }
`;

export const Title = styled.h1`
  font-family: "RobotoCondensed";
  font-size: 3rem;
  text-transform: uppercase;

  span {
    color: #f0141e;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 960px) {
    font-size: 5rem;
  }
`;

export const Characters = styled.ul`
  background: rgba(255, 255, 255, 0.05);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin: 10px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 15px 20px 20px;
  }

  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 15px 30px 30px;
  }
`;

export const Loading = styled.p`
  background: rgba(255, 255, 255, 0.05);
  margin: 10px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    margin: 15px 20px;
  }

  @media screen and (min-width: 960px) {
    margin: 15px 30px;
  }
`;
