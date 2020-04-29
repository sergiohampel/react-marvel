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
  grid-template-columns: 60px 900px;
  justify-content: center;
  padding: 50px;
`;

export const DetailsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 400px;
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

export const DetailsSubTitle = styled.h3`
  font-size: 2rem;
  margin-top: 30px;
`;

export const DetailsDescription = styled.p`
  margin-top: 30px;
`;

export const DetailsParticipation = styled.p`
  color: #5e5e5e;
  margin-top: 30px;
`;

export const Series = styled.ul`
  margin-top: 30px;
`;

export const SeriesItem = styled.li`
  color: #5e5e5e;
  font-size: 1.4rem;

  &:not(:first-child) {
    margin-top: 15px;
  }
`;
