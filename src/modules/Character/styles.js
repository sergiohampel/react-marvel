import styled from "styled-components";

export const Header = styled.header`
  margin: 20px 10px 10px;

  @media screen and (min-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20px 20px 40px;
  }

  @media screen and (min-width: 960px) {
    margin: 30px 30px 60px;
  }
`;

export const Title = styled.h1`
  font-family: "RobotoCondensed";
  font-size: 3rem;
  text-align: center;
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
    grid-gap: 20px;
    margin: 20px;
    padding: 20px;
  }

  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    margin: 30px;
    padding: 30px;
  }
`;
