import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: ${({ $variant }) => ($variant ? "column" : "row")};
  gap: 15px;

  @media screen and (min-width: 768px) {
    gap: 35px;
  }
`;

export const BurgerBtn = styled.div`
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
