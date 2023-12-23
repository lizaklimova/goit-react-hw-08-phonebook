import styled from "styled-components";

export const BarDiv = styled.div`
  position: absolute;
  top: 150px;
  right: 50%;
  z-index: 2;
  transform: translateX(50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  padding: 30px;
  backdrop-filter: blur(15px);
  border-radius: 40px;
`;

export const AddContactBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  padding: 10px;
  border-radius: 40px;
  transition: ${({ theme }) => theme.transitions.eased};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.blackOpacity};
  }
`;
