import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

export const ContactLi = styled.li`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 5px;
  width: 100%;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 40px;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #b9b9b9;
    border-radius: 50px;
  }

  @media screen and (min-width: 768px) {
    &::after {
      width: 440px;
    }
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ContactAvatar = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid black;
  background: ${({ $avatar }) => `url(${$avatar}) no-repeat center / cover`};
`;

export const ContactInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactInfoName = styled.p``;

export const ContactInfoTel = styled.p`
  color: #8a8a8d;
  font-size: 14px;
  line-height: 1.29;
`;

export const ContactDeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  outline: none;
  width: 35px;
  height: 35px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  transition: transform ease 0.1s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  width: 100%;
  height: 100%;
  fill: #000;
`;

export const NoContactsFoundMsg = styled.p`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  span {
    font-weight: 700;
    text-decoration: underline;
  }
`;
