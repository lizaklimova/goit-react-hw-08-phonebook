import styled from "styled-components";

export const LoaderBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
`;
