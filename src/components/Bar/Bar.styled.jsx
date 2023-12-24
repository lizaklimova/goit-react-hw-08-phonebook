import styled from "styled-components";

export const BarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  padding: 30px;
  margin: auto;
  margin-top: 50px;
  backdrop-filter: blur(15px);
  border-radius: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1440px) {
    width: 40%;
  }
`;

export const AddContactBtn = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  padding: 5px;
  border-radius: 40px;
  transition: ${({ theme }) => theme.transitions.eased};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blackOpacity};
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 10px;
  }
`;
