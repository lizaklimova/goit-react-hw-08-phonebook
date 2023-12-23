import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "components/App/App.styled";
import Navigation from "components/Navigation";
import { Header } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <MainContainer>
          <Navigation />
        </MainContainer>
      </Header>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
