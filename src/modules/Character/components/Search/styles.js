import styled from "styled-components";

export const SearchForm = styled.form`
  margin: 30px 0 0;
  position: relative;

  svg {
    color: rgba(255, 255, 255, 0.2);
    font-size: 2rem;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 15px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 4px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 2.4rem;
  height: 50px;
  padding: 0 80px 0 35px;
  transition: border-color 0.3s;
  width: 100%;

  &:focus {
    border-color: rgba(255, 255, 255, 1);
  }
`;

export const Button = styled.button`
  background-color: #f0141e;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a70e15;
  }
`;
