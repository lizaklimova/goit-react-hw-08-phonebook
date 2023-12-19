import styled from "styled-components";

export const ContactsUl = styled.ul`
  padding: 10px;
  width: 100%;
  height: calc(100% - 230px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #0000002b;
  }

  &::-moz-scrollbar {
    width: 10px;
  }

  &::-moz-scrollbar-thumb {
    background-color: #000000;
    border-radius: 6px;
  }

  &::-moz-scrollbar-track {
    background-color: #0000002b;
  }

  &::-ms-scrollbar {
    width: 10px;
  }

  &::-ms-scrollbar-thumb {
    background-color: #000000;
    border-radius: 6px;
  }

  &::-ms-scrollbar-track {
    background-color: #0000002b;
  }
`;
