import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
`;

export const FilterAndIconWrap = styled.div`
  position: relative;
`;

export const SearchIcon = styled(IoSearchOutline)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`;

export const SearchInput = styled.input`
  padding: 10px 12px 10px 12px;
  border-radius: 15px;
  background-color: #efefef;
  border: none;
  width: 235px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8a8a8d;
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.408px;
  }
  @media screen and (min-width: 768px) {
    width: 335px;
  }
`;
