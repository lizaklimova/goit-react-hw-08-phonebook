import UserMenu from "components/UserMenu";
import CloseBtn from "components/CloseBtn";
import { MenuBackdrop, Menu } from "./MobMenu.styled";

const MobMenu = ({ isMenuOpen, closeMenu }) => {
  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) closeMenu();
  };

  return (
    isMenuOpen && (
      <MenuBackdrop onClick={handleBackdropClose}>
        <Menu>
          <CloseBtn closeFn={closeMenu} />
          <UserMenu mob closeMenu={closeMenu} />
        </Menu>
      </MenuBackdrop>
    )
  );
};

export default MobMenu;
