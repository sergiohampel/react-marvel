import styled from "styled-components";

export const Card = styled.div`
  background: url(${({ url }) => url}) no-repeat center center;
  background-size: cover;
  cursor: pointer;
  height: 300px;
  position: relative;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  > h2 {
    background-color: rgba(0, 0, 0, 0.8);
    bottom: 0;
    font-family: "RobotoCondensed";
    font-size: 1.8rem;
    left: 0;
    padding: 10px;
    position: absolute;
    right: 0;
  }
`;
