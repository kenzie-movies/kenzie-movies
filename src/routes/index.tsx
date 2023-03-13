import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import InitialPage from "../pages/InitialPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import Profile from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoute from "./AdminRoute";
import { MoviesProvider } from "../providers/MoviesContext";
import UserRoute from "./UserRoute";

const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<InitialPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/home"
            element={
              <MoviesProvider>
                <HomePage />
              </MoviesProvider>
            }
          />
          <Route
            path="/search"
            element={
              <MoviesProvider>
                <SearchPage />
              </MoviesProvider>
            }
          />
        </Route>

        <Route path="/" element={<UserRoute />}>
          <Route
            path="/profile"
            element={
              <MoviesProvider>
                <Profile />
              </MoviesProvider>
            }
          />
        </Route>

        <Route path="/" element={<AdminRoute />}>
          <Route
            path="/admin"
            element={
              <MoviesProvider>
                <AdminPage />
              </MoviesProvider>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
