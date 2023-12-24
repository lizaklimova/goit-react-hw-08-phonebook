import styled from "styled-components";

export const BarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  border-radius: 40px;
  padding: 30px;
  margin: auto;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  backdrop-filter: blur(15px);

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
  border-radius: 40px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  transition: ${({ theme }) => theme.transitions.eased};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blackOpacity};
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 14px;
  }
`;
