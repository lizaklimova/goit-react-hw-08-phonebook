import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 365px;
  }

  @media screen and (min-width: 768px) {
    max-width: 734px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1406px;
  }
`;

export const NoContactsMsg = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-top: 200px;
`;

export const NavigLink = styled(NavLink)`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => `filter ${theme.transitions.eased}`};

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    transition: ${({ theme }) =>
      `width ${theme.transitions.linear}, opacity ${theme.transitions.linear}`};
  }

  &.active::after {
    width: 100%;
    opacity: 1;
  }

  &:hover,
  &:focus {
    filter: ${({ theme }) => `${theme.shadows.drop} ${theme.colors.black})`};
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};

    &:hover::after,
    &:focus::after {
      width: 100%;
      opacity: 1;
    }
  }
`;
