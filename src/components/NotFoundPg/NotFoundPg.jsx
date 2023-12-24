import { IoIosArrowBack } from "react-icons/io";
import {
  BgDiv,
  NotFoundTextDiv,
  NotFoundH3,
  NotFoundP,
  NotFoundBtn,
} from "./NotFoundPg.styled";
import { MainContainer } from "components/App/App.styled";

const NotFoundPg = () => {
  return (
    <BgDiv>
      <MainContainer>
        <NotFoundTextDiv>
          <NotFoundH3>404</NotFoundH3>
          <NotFoundP>Page not found</NotFoundP>
          <NotFoundBtn type="button">
            <IoIosArrowBack />
            Go back
          </NotFoundBtn>
        </NotFoundTextDiv>
      </MainContainer>
    </BgDiv>
  );
};

export default NotFoundPg;
