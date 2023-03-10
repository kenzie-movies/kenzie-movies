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
  const [user, setUser] = useState<iResponseUser | null>(null);
  const [nameUser, setNameUser] = useState<iUser[]>([]);
  const navigate = useNavigate();

  const userRegister = async (data: iRegisterUser) => {
    const userData = { ...data, isAdmin: false };
    try {
      const response = await api.post<iResponseUser>("/register", userData);
      navigate("/login");

      toast.success("Usuário cadastrado");
    } catch (error) {
      toast.error("Email já existente");
    }
  };

  const userLogin = async (data: iLoginUser) => {
    try {
      const response = await api.post<iResponseUser>("/login", data);

      setUser(response.data);

      localStorage.setItem(
        "@KenzieMovies:UserToken",
        response.data.accessToken
      );

      localStorage.setItem(
        "@KenzieMovies:UserId",
        JSON.stringify(response.data.user.id)
      );
      navigate("/profile");
    } catch (error) {
      toast.error("Email ou senha inválidos");

      console.error(error);
    }
  };

  const getUser = async () => {
    const token = localStorage.getItem("@KenzieMovies:UserToken");
    const idUser = localStorage.getItem("@KenzieMovies:UserId");

    if (token) {
      try {
        const response = await api.get<iUser[]>(`/600/users/${idUser}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNameUser(response.data);
      } catch (error) {}
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const userLogOut = () => {
    setUser(null);
    localStorage.removeItem("@KenzieMovies:UserToken");
    toast.success("Log out realizado com sucesso.");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, nameUser, userRegister, userLogin, userLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
