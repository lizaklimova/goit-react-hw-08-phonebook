import statusBarImg from "../../img/status-bar.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  HeaderPart,
  StatusBar,
  NavWrapper,
  Title,
  AddBtn,
  AddIcon,
} from "./Header.styled";

const Header = ({ openModal }) => {
  return (
    <HeaderPart>
      <StatusBar $bar={statusBarImg}></StatusBar>
      <NavWrapper>
        <IoIosArrowRoundBack size={50} />
        <Title>My Contacts</Title>
        <AddBtn type="button" onClick={openModal}>
          <AddIcon />
        </AddBtn>
      </NavWrapper>
    </HeaderPart>
  );
};

export default Header;
