import styled from "styled-components";

export const MenuBackdrop = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 7;
  background-color: ${({ theme }) => theme.colors.blackOpacity};
  backdrop-filter: blur(5px);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backdropBlack};
`;
