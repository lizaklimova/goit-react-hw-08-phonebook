import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
