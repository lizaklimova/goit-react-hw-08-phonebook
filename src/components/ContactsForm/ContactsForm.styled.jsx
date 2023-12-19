import styled from "styled-components";

export const ContactsFormEl = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  letter-spacing: 0.08px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const ContactsNameInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #000000;

  &:focus {
    outline: none;
    border-color: #2eb56b;
  }
`;

export const Label = styled.label`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.07px;
`;

export const ContactsNumberInput = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 2px solid #000000;

  &:focus {
    outline: none;
    border: 2px solid #2eb56b;
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
  color: white;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  border: none;
  box-shadow: 0 9px 25px 1px #14a73e98;
  letter-spacing: 0.8px;
  border-radius: 30px;
  cursor: pointer;
  transition: box-shadow 300ms linear;

  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;
