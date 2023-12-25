import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lazy } from "react";
import SharedLayout from "components/SharedLayout";
import { useAuth } from "hooks";
import { refresh } from "../../redux/auth/operations";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

const HomePage = lazy(() => import("pages/Home"));
const RegisterPage = lazy(() => import("pages/Register"));
const LoginPage = lazy(() => import("pages/Login"));
const ContactsPage = lazy(() => import("pages/Contacts"));
const NotFoundPage = lazy(() => import("pages/NotFound"));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    )
  );
}
