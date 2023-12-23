import { NavigLink } from "components/App/App.styled";
import { NavDiv } from "components/Navigation/Navigation.styled";

const AuthNav = () => {
  return (
    <NavDiv>
      <NavigLink to="/register">Register</NavigLink>
      <NavigLink to="/login">Login</NavigLink>
    </NavDiv>
  );
};

export default AuthNav;
