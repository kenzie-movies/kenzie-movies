import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { iGetMovies, iMoviesProvider, iMoviesProviderProps } from "./@types";

export const MoviesContext = createContext({} as iMoviesProvider);

export const MoviesProvider = ({ children }: iMoviesProviderProps) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<iGetMovies | []>([]);
  const [modalMovie, setModalMovie] = useState(false);
  const [modalUser, setModalUser] = useState(false);

  const getMovies = async () => {
    const token = localStorage.getItem("@KenzieMovies:UserToken");

    if (token) {
      try {
        const response = await api.get<iGetMovies | []>("/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMovies(response.data);
        navigate("/profile");
      } catch (error) {
        toast.error("Verifique os dados e tente novamente");
      }
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies, modalMovie,modalUser, setModalMovie,setModalUser, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
