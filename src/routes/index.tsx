import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import Profile from "../pages/profile";

const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </AnimatePresence>
  );
};

export default Router;
