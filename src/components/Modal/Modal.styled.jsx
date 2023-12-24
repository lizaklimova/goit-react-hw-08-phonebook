import { styled } from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 52, 50, 0.7);
  backdrop-filter: blur(15px);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(13, 13, 13, 0.8);
  padding: 45px;
  width: 290px;
  border-radius: 15px;
  border: 1px solid #000000;
  box-shadow: rgba(50, 93, 69, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 4;

  @media screen and (min-width: 375px) {
    width: 345px;
  }

  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;
