import statusBarImg from "../../img/status-bar.png";

import {
  HeaderPart,
  StatusBar,
  NavWrapper,
  BackIcon,
  Title,
  AddBtn,
  AddIcon,
} from "./Header.styled";

const Header = ({ openModal }) => {
  return (
    <HeaderPart>
      <StatusBar $bar={statusBarImg}></StatusBar>
      <NavWrapper>
        <BackIcon />
        <Title>My Contacts</Title>
        <AddBtn type="button" onClick={openModal}>
          <AddIcon />
        </AddBtn>
      </NavWrapper>
    </HeaderPart>
  );
};

export default Header;
