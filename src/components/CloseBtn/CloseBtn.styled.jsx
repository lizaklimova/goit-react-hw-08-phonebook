import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 300ms ease-in-out, filter 300ms ease-in-out;

  &:hover {
    filter: ${({ theme }) => `drop-shadow(-1px 1px 5px ${theme.colors.white})`};
    transform: scale(1.1);
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
