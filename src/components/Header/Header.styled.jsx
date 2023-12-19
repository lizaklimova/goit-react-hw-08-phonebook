import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
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

export const BackIcon = styled(IoIosArrowRoundBack)`
  width: 50px;
  height: 50px;
  cursor: not-allowed;
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

  &:hover,
  &:focus {
    filter: drop-shadow(10px 30px 50px #373030);
    outline: none;
  }
`;

export const AddIcon = styled(IoMdPersonAdd)`
  width: 40px;
  height: 40px;
  fill: black;
`;
