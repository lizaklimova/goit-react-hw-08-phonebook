import styled from "styled-components";
import { LuUserCircle2 } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

export const ContactLi = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 15px;
  border-bottom: ${({ theme }) => `3px solid ${theme.colors.whiteOpacity}`};
  backdrop-filter: blur(15px);
  @media screen and (min-width: 768px) {
    width: 430px;
  }
`;

export const ContactUser = styled(LuUserCircle2)`
  stroke: ${({ theme }) => theme.colors.white};
  fill: transparent;
  width: 30px;
  height: 30px;
`;

export const ContactWrapper = styled.div``;

export const ContactInfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ContactInfoName = styled.p``;

export const ContactInfoTel = styled.p``;

export const EditIcon = styled(FaRegEdit)`
  stroke: ${({ theme }) => theme.colors.white};
  width: 20px;
  height: 20px;
`;

export const ContactEditBtn = styled.button``;

export const ContactDeleteBtn = styled.button`
  &:hover {
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)``;

export const NoContactsFoundMsg = styled.p`
  span {
  }
`;
