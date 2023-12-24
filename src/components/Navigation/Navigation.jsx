import { RxHamburgerMenu } from "react-icons/rx";
import AuthNav from "components/AuthNav";
import { useAuth } from "hooks";
import UserMenu from "components/UserMenu";
import { NavigLink } from "components/App/App.styled";
import { Nav, NavDiv, BurgerBtn } from "./Navigation.styled";

const Navigation = ({ openMenu }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavDiv>
        <NavigLink to="/">Home</NavigLink>
        {isLoggedIn && <NavigLink to="/contacts">Contacts</NavigLink>}
      </NavDiv>

      {isLoggedIn && window.innerWidth < 767 ? (
        <BurgerBtn type="button" onClick={() => openMenu(true)}>
          <RxHamburgerMenu />
        </BurgerBtn>
      ) : isLoggedIn ? (
        <UserMenu />
      ) : (
        <AuthNav />
      )}
    </Nav>
  );
};
export default Navigation;
