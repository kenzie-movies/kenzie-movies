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
  const navigate = useNavigate();

  const id = localStorage.getItem("@KenzieMovies:UserId");
  const token = localStorage.getItem("@KenzieMovies:UserToken");

  useEffect(() => {
    const getuser = async (id: string) => {
      try {
        const response = await api.get<iResponseUser>(`users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      getuser(id);
    }
  }, []);

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
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha inválidos");

      console.error(error);
    }
  };

  const userLogOut = () => {
    setUser(null);
    localStorage.removeItem("@KenzieMovies:UserToken");
    toast.success("Log out realizado com sucesso.");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogOut }}>
      {children}
    </UserContext.Provider>
  );
};
