import AuthNav from "components/AuthNav";
import { useAuth } from "hooks";
import UserMenu from "components/UserMenu";
import { NavigLink } from "components/App/App.styled";
import { Nav, NavDiv } from "./Navigation.styled";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavDiv>
        <NavigLink to="/">Home</NavigLink>
        {isLoggedIn && <NavigLink to="/contacts">Contacts</NavigLink>}
      </NavDiv>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Nav>
  );
};
export default Navigation;
