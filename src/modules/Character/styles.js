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

export const Details = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  padding: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  @media screen and (min-width: 960px) {
    grid-template-columns: 60px 900px;
  }
`;

export const DetailsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
  }

  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 400px;
    grid-template-rows: auto 1fr;
  }
`;

export const ButtonIcon = styled.button`
  background-color: #f0141e;
  border: 0;
  cursor: pointer;
  font-size: 4.5rem;
  height: 60px;
  transition: background-color 0.3s;
  width: 60px;

  &:hover {
    background-color: #a70e15;
  }
`;

export const DetailsImage = styled.img`
  max-width: 100%;
`;

export const DetailsContent = styled.section`
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
`;

export const DetailsTitle = styled.h1`
  font-size: 3rem;
`;

export const DetailsDescription = styled.p`
  margin-top: 30px;
`;

export const DetailsParticipation = styled.p`
  color: #5e5e5e;
  margin-top: 30px;
`;

export const SeriesContainer = styled.section`
  @media screen and (min-width: 768px) {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

export const SeriesTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-top: 50px;
`;

export const Series = styled.ul`
  columns: 100px 1;
  column-gap: 10px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    columns: 100px 4;
    column-gap: 20px;
    margin-top: 20px;
  }

  @media screen and (min-width: 960px) {
    column-gap: 30px;
    margin-top: 30px;
  }
`;

export const SeriesItem = styled.li`
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 960px) {
    margin-bottom: 30px;
  }
`;
