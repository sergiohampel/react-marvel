import styled from "styled-components";

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  color: #fff;
  font-size: 2.4rem;
  height: 50px;
  margin: 30px 0 0;
  padding: 20px;
  transition: background-color 0.3s;
  width: 100%;

  &:focus {
    background-color: rgba(255, 255, 255, 1);
    color: #000;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    width: auto;
  }

  @media screen and (min-width: 960px) {
    width: 400px;
  }
`;
