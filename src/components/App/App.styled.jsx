import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  height: 97vh;

  @media screen and (min-width: 475px) {
    max-width: 445px;
  }

  @media screen and (min-width: 675px) {
    max-width: 545px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::after {
    position: absolute;
    right: 50%;
    bottom: 5px;
    transform: translateX(50%);
    content: "";
    display: block;
    width: 134px;
    height: 5px;
    background-color: #000;
    border-radius: 100px;

    @media screen and (min-width: 768px) {
      width: 174px;
    }
  }
`;

export const NoContactsMsg = styled.p`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
