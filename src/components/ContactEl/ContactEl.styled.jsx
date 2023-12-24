import styled from "styled-components";
import { LuUserCircle2 } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export const ContactLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px;
  padding: 15px;
  border-bottom: ${({ theme }) => `3px solid ${theme.colors.white}`};
  background-color: ${({ theme }) => theme.colors.whiteOpacity};

  @media screen and (min-width: 768px) {
    width: 430px;
  }
`;

export const ContactUser = styled(LuUserCircle2)`
  width: 20px;
  height: 20px;
  stroke: ${({ theme }) => theme.colors.white};
  fill: transparent;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const ContactInfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ContactInfoName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const ContactInfoTel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const EditIcon = styled(FaRegEdit)`
  width: 15px;
  height: 15px;
  stroke: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const ContactEditBtn = styled.button`
  transition: ${({ theme }) => `transform ${theme.transitions.linear}`};

  &:hover {
    transform: scale(1.2);
  }
`;

export const ContactDeleteBtn = styled.button`
  transition: ${({ theme }) => `transform ${theme.transitions.linear}`};

  &:hover {
    transform: scale(1.2);
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  width: 15px;
  height: 15px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const NoContactsFoundMsg = styled.p`
  span {
    text-decoration: underline;
  }
`;
