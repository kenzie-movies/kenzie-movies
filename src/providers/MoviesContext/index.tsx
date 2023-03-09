import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { iGetEditMovie, iGetMovies, iMoviesContext, iMoviesProviderProps } from "./@types";
import { useNavigate } from "react-router-dom";

export const MoviesContext = createContext({} as iMoviesContext);

export const MoviesProvider = ({ children }: iMoviesProviderProps) => {
  const token = localStorage.getItem("@KenzieMovies:UserToken");
  const [movies, setMovies] = useState<iGetMovies[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [movieFilter, setMovieFilter] = useState<iGetMovies[]>([]);
  const [modalOpen, setModalOpen] = useState(false)




  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await api.get<[iGetMovies]>("/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMovies(response.data);
      } catch (error) {}
    };

    getMovies();
  }, []);



  const handleClick = () => {
    const moviesFilter = movies.filter((movie) =>
      searchMovie === ""
        ? false
        : movie.name.toLowerCase().includes(searchMovie.toLowerCase()) ||
          movie.genre.toLowerCase().includes(searchMovie.toLowerCase())
    );

    setMovieFilter(moviesFilter);
    navigate("/search");
  };

  
  const editMovie =  async (movieId: number, data: iGetEditMovie) => {

    try{
      const response = await api.patch(`/movies/${movieId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch( error ) {
      console.log(error)
    }
  }

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, setSearchMovie, handleClick, movieFilter, editMovie, modalOpen, setModalOpen }}>
      {children}
    </MoviesContext.Provider>
  );
};
