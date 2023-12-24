import styled from "styled-components";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export const PersonNameIcon = styled(IoPerson)`
  position: absolute;
  left: 0;
  bottom: 35%;
  width: 20px;
  height: 20px;
`;

export const PersonTelIcon = styled(FaPhoneAlt)`
  position: absolute;
  left: 0;
  bottom: 35%;
  width: 20px;
  height: 20px;
`;

export const ContactsFormEl = styled.form`
  letter-spacing: 0.08px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContactsNameInput = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.white}`};
  background-color: transparent;
  border-radius: 0;

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
  }

  &:focus {
    outline: none;
  }
`;

export const ContactsNumberInput = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.large};
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.white}`};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;

  &::placeholder {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
  width: 100%;
  padding: 10px;
  margin-top: 21px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 30px;
  cursor: pointer;
  transition: ${({ theme }) =>
    `color ${theme.transitions.linear},background-color ${theme.transitions.linear}, outline ${theme.transitions.linear}, filter ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.colors.white}`};
    border-radius: 30px;
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    filter: drop-shadow(1px 1px 1px #eefeaf);
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
