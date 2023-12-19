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
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 25px;
  letter-spacing: 0.08px;
  width: 100%;
  color: #fff;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ContactsNameInput = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  border: none;
  color: #fff;
  border-bottom: 2px solid #fff;
  background-color: transparent;

  &::placeholder {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.372);
  }

  &:focus {
    outline: none;
  }
`;

export const ContactsNumberInput = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 10px;
  padding-left: 35px;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  background-color: transparent;

  &::placeholder {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.372);
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
  font-weight: 700;
  font-size: 16px;
  width: 55%;
  padding: 10px;
  margin-top: 21px;
  color: #000;
  background-color: #fff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  letter-spacing: 0.8px;
  border-radius: 30px;
  cursor: pointer;
  transition: color 300ms linear, background-color 300ms linear,
    outline 300ms linear, filter 300ms linear;

  &:hover,
  &:active {
    outline: 1px solid #fff;
    color: #fff;
    background-color: transparent;
    filter: drop-shadow(1px 1px 1px #eefeaf);
  }
`;
