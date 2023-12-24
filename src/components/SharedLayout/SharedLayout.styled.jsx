import styled from "styled-components";

export const Header = styled.header`
  font-family: "Josefin Sans";
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.opacityBlue};
  backdrop-filter: blur(7px);

  @media screen and (min-width: 768px) {
    padding: 35px;
  }
`;
