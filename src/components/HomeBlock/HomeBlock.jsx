import homeImg from "images/home.png";
import {
  HomeDiv,
  HomeTitle,
  HomeTextDiv,
  HomeImg,
  HomeText,
} from "./HomeBlock.styled";
import { MainContainer } from "components/App/App.styled";

const HomeBlock = () => {
  return (
    <HomeDiv>
      <MainContainer>
        <HomeTextDiv>
          <HomeTitle>Contacts</HomeTitle>
          <HomeText>Try this app to save your contacts</HomeText>
        </HomeTextDiv>
        <HomeImg src={homeImg} alt="demo home" />
      </MainContainer>
    </HomeDiv>
  );
};

export default HomeBlock;
