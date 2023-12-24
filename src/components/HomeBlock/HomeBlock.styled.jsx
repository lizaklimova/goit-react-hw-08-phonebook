import styled from "styled-components";
import homeDecor from "images/home-element.png";

export const HomeDiv = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: url(${homeDecor}) no-repeat left 0 bottom 0 / cover;
  height: 100vh;

  @media screen and (min-width: 768px) {
    background: url(${homeDecor}) no-repeat left 0 bottom 0 / cover;
    gap: 50px;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) =>
    ` linear-gradient(90deg, ${theme.colors.textGradient} 0%, ${theme.colors.white} 100%)`};

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 150px;
  }
`;

export const HomeText = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const HomeImg = styled.img`
  width: 100%;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 350px;
    margin: 50px auto;
  }
`;

export const HomeTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
