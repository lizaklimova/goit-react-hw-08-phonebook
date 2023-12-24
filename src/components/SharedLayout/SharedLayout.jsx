import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader";
import { MainContainer } from "components/App/App.styled";
import Navigation from "components/Navigation";
import MobMenu from "components/MobMenu";
import { Header } from "./SharedLayout.styled";

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <MobMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      <Header>
        <MainContainer>
          <Navigation openMenu={openMenu} />
        </MainContainer>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
