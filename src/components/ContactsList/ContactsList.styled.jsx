import styled from "styled-components";

export const ContactsUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  border-radius: 30px;
  padding: 15px;
  margin: 30px auto 50px auto;
  background-color: ${({ theme }) => theme.colors.opacityBlue};
  backdrop-filter: blur(15px);
  box-shadow: rgba(241, 240, 240, 0.24) 0px 3px 8px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    width: 550px;
    padding: 50px;
  }
`;
