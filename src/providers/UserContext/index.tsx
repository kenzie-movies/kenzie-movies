import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iUser,
  iLoginUser,
  iRegisterUser,
  iResponseUser,
  iUserContext,
  iUserProviderProps,
} from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(
    JSON.parse(localStorage.getItem("@KenzieMovies:User")!) || null
  );
  const [updateUser, setUpdateUser] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("@KenzieMovies:UserToken");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("@KenzieMovies:User")!));
  }, [updateUser]);

  const userRegister = async (data: iRegisterUser) => {
    const userData = { ...data, isAdmin: false };
    try {
      const response = await api.post<iResponseUser>("/register", userData);
      navigate("/login");

      toast.success("Usuário cadastrado");
    } catch (error) {
      toast.error("Email já existente");
    } finally {
      console.clear();
    }
  };

  const userLogin = async (data: iLoginUser) => {
    try {
      const response = await api.post<iResponseUser>("/login", data);

      setUser(response.data.user);

      localStorage.setItem(
        "@KenzieMovies:UserToken",
        response.data.accessToken
      );

      localStorage.setItem(
        "@KenzieMovies:User",
        JSON.stringify(response.data.user)
      );

      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha inválidos");
    } finally {
      console.clear();
    }
  };

  const userLogOut = () => {
    setUser(null);
    localStorage.removeItem("@KenzieMovies:UserToken");
    localStorage.removeItem("@KenzieMovies:User");
    localStorage.removeItem("@KenzieMovies:Favorites");

    toast.success("Logout realizado com sucesso.");
    navigate("/");
  };

  const userUpdate = async (data: iUser) => {
    try {
      const response = await api.patch(`/users/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Perfil editado");
    } catch (error) {
      console.log(error);
    } finally {
      console.clear();
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        userRegister,
        userLogin,
        userLogOut,
        userUpdate,
        updateUser,
        setUpdateUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};
