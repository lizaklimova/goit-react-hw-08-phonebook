import { Routes, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import { lazy } from "react";

const RegisterPage = lazy(() => import("pages/Register"));
const LoginPage = lazy(() => import("pages/Login"));
const ContactsPage = lazy(() => import("pages/Contacts"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />

        <Route path="*" />
      </Route>
    </Routes>
  );
}
