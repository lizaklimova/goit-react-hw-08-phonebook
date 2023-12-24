import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const FilterAndIconWrap = styled.div`
  position: relative;
`;

export const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
`;

export const SearchInput = styled.input`
  padding: 10px 12px 10px 35px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accentBlue};
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.7;
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 1;
    letter-spacing: -0.408px;
  }
`;
