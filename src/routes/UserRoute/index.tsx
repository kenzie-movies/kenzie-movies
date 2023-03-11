import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

const UserRoute = () => {
  const { user } = useContext(UserContext);

  return user && !user?.isAdmin ? (
    <Outlet />
  ) : user && user?.isAdmin ? (
    <Navigate to="/admin" />
  ) : (
    <Navigate to="/" />
  );
};
export default UserRoute;
