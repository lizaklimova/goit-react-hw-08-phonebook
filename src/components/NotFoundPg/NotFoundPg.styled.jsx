import styled from "styled-components";
import moonImg from "images/moon.png";
import austronautImg from "images/astronaut.png";
import earthImg from "images/earth.png";
import skyImg from "images/sky.jpg";

export const BgDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background-image: url(${moonImg}), url(${austronautImg}), url(${earthImg}),
    url(${skyImg});
  background-size: 130px, 100px, 70px, cover;
  background-position: 0 0, 90% 0, 10% 50%, center;
  background-repeat: no-repeat;

  @media screen and (min-width: 500px) {
    background-size: 180px, 130px, 100px, cover;
  }

  @media screen and (min-width: 768px) {
    background-size: 250px, 200px, 150px, cover;
  }

  @media screen and (min-width: 1440px) {
    background-size: 350px, 250px, 170px, cover;
  }
`;

export const NotFoundTextDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const NotFoundH3 = styled.h3`
  font-size: 80px;
  color: ${({ theme }) => theme.colors.grey};

  @media screen and (min-width: 500px) {
    font-size: 100px;
  }

  @media screen and (min-width: 768px) {
    font-size: 130px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 150px;
  }
`;

export const NotFoundP = styled.p`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 500px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const NotFoundBtn = styled.button`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.white};

  svg {
    transition: ${({ theme }) => `transform ${theme.transitions.linear}`};
  }

  &:hover svg,
  &:focus svg {
    transform: translateX(-5px);
  }

  @media screen and (min-width: 500px) {
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;
