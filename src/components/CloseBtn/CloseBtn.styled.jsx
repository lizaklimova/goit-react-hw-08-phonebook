import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 300ms ease-in-out, filter 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(-1px 1px 5px #eefeaf);
  }

  svg {
    fill: #fff;
  }
`;
