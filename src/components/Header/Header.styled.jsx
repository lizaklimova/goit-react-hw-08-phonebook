import styled, { keyframes } from "styled-components";
import { IoMdAdd } from "react-icons/io";

const addContactAnimation = keyframes`
  0% {
    transform: scale(0.7);
     filter: drop-shadow(-1px 3px 4px #4e4d4d);
  }
    100% {
    transform: scale(1.1);
     filter: drop-shadow(-1px 3px 10px #000000);
  }
`;

export const HeaderPart = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f6f6;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  margin-bottom: 16px;
`;

export const StatusBar = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ $bar }) => `url(${$bar}) no-repeat center / contain`};
  display: flex;
  justify-content: center;

  @media screen and (min-width: 428px) {
    background-size: cover;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.31;
`;

export const AddBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 300ms ease-in-out, filter 300ms ease-in-out;
  animation: ${addContactAnimation} 3s linear 1s infinite;

  &:focus {
    outline: none;
  }
`;

export const AddIcon = styled(IoMdAdd)`
  width: 50px;
  height: 50px;
  fill: black;
`;
