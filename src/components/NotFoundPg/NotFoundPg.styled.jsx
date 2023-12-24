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

  background-size: 200px, 200px, 100px, cover;
  background-position: 0 0, 90% 30%, 70% 90%, center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-size: 300px, 200px, 150px, cover;
  }

  @media screen and (min-width: 1440px) {
    background-size: 400px, 300px, 200px, cover;
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
  font-size: 150px;
  color: #838282;
`;
export const NotFoundP = styled.p`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.white};
`;
export const NotFoundBtn = styled.button`
  font-size: 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 20px;

  svg {
    transition: ${({ theme }) => `transform ${theme.transitions.linear}`};
  }

  &:hover svg,
  &:focus svg {
    transform: translateX(-5px);
  }
`;
