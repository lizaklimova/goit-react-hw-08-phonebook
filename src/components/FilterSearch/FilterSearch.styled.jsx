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
  width: 100%;
  border: none;
  border-radius: 15px;
  padding: 12px 12px 12px 35px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accentBlue};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 1;
    letter-spacing: -0.408px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.7;
  }
`;
