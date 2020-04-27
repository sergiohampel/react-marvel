import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  height: 300px;
  overflow: hidden;
  position: relative;

  &::before {
    background: url(${({ url }) => url}) no-repeat center center;
    background-size: cover;
    content: "";
    display: block;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    width: 100%;
  }

  &:hover {
    &::before {
      transform: scale(1.2);
    }

    h2 {
      height: 60px;
    }
  }

  h2 {
    background-color: rgba(0, 0, 0, 0.8);
    bottom: 0;
    font-family: "RobotoCondensed";
    font-size: 1.8rem;
    height: 40px;
    left: 0;
    padding: 10px;
    position: absolute;
    right: 0;
    transition: height 0.3s ease-in-out;
  }
`;
