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
  font-size: ${({ theme }) => theme.fontSizes.large};
  width: 100%;
  border: none;
  padding: 10px;
  padding-left: 35px;
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
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.white}`};
  border-radius: 0;
  padding: 10px;
  padding-left: 35px;
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
  border: none;
  border-radius: 30px;
  padding: 10px;
  margin-top: 21px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: ${({ theme }) =>
    `color ${theme.transitions.linear},background-color ${theme.transitions.linear}, outline ${theme.transitions.linear}, box-shadow ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    border-radius: 30px;
    outline: ${({ theme }) => `1px solid ${theme.colors.white}`};
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    box-shadow: ${({ theme }) => theme.shadows.box};
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
