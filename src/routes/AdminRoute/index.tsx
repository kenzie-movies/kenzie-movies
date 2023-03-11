import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

const AdminRoute = () => {
  const { user } = useContext(UserContext);

  return user && user?.isAdmin ? (
    <Outlet />
  ) : user && !user?.isAdmin ? (
    <Navigate to="/profile" />
  ) : (
    <Navigate to="/" />
  );
};
export default AdminRoute;
