import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  iLoginUser,
  iRegisterUser,
  iResponseUser,
  iUserContext,
  iUserProviderProps,
} from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
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
    }
  };


  return (
    <UserContext.Provider value={{ userRegister, userLogin, }}>
      {children}
    </UserContext.Provider>
  );
};
