import styled from "styled-components";

export const ContactsSortBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  border: ${({ theme }) => `1px solid ${theme.colors.white}`};
  padding: 10px 20px;
  margin: 30px auto 0 auto;
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => `background-color ${theme.transitions.linear}`};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.whiteOpacity};
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
