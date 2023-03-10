import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
  iGetEditMovie,
  iGetMovies,
  iMoviesContext,
  iMoviesProviderProps,
} from "./@types";
import { useNavigate } from "react-router-dom";

export const MoviesContext = createContext({} as iMoviesContext);

export const MoviesProvider = ({ children }: iMoviesProviderProps) => {
  const token = localStorage.getItem("@KenzieMovies:UserToken");
  const userId = localStorage.getItem("@KenzieMovies:UserId");
  const [movies, setMovies] = useState<iGetMovies[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [movieFilter, setMovieFilter] = useState<iGetMovies[]>([]);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [modalMovie, setModalMovie] = useState(false);
  const [modalUser, setModalUser] = useState(false);
  const [editingMovie, setEditingMovie] = useState<iGetEditMovie>({
    name: "",
    synopsis: "",
    cover: "",
    release: "",
    duration: "",
    genre: "",
    classification: "",
    verified: false,
    id: 0,
  });
  const [infoMovie, setInfoMovie] = useState<iGetEditMovie>({
    name: "",
    synopsis: "",
    cover: "",
    release: "",
    duration: "",
    genre: "",
    classification: "",
    verified: false,
    id: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await api.get<iGetMovies[]>("/movies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMovies(response.data);
      } catch (error) {}
    };

    getMovies();
  }, [movies]);

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

  useEffect(() => {
    const moviesFilter = movies.filter((movie) =>
      searchMovie === ""
        ? false
        : movie.name.toLowerCase().includes(searchMovie.toLowerCase()) ||
          movie.genre.toLowerCase().includes(searchMovie.toLowerCase())
    );

    setMovieFilter(moviesFilter);
  }, [searchMovie]);

  const showModalEditMovie = (movieId: number) => {
    const movieFound = movies.find((movie) => {
      if (movie.id === movieId) {
        setModalEditOpen(true);

        return movie;
      }
    });

    setEditingMovie(movieFound as iGetEditMovie);
    return movieFound;
  };

  const editMovie = async (movieId: number, data: iGetEditMovie) => {
    try {
      const response = await api.patch(`/movies/${movieId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEditingMovie(response.data);

      setModalEditOpen(false);
      toast.success("Filme editado");
    } catch (error) {
      console.log(error);
    }
  };

  const movieVerify = async (movieId: number) => {
    const movieFound = movies.find(
      (movieNoVerified) => movieId === movieNoVerified.id && movieNoVerified
    );

    const movieVerified = { ...movieFound, verified: true };
    console.log(movieVerified);

    try {
      const response = await api.patch(`/movies/${movieId}`, movieVerified, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteMovie = async (movieId: number) => {
    try {
      const response = await api.delete(`/movies/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Filme deletado");
    } catch (error) {}
  };

  const addMovie = async (data: iGetEditMovie) => {
    try {
      const response = await api.post(`/movies`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setModalAddOpen(false);
      toast.warn("Filme será verificado pelo Admin");
    } catch (error) {
      console.log(error);
    }
  };
  const showModalInfoMovie = (movieId: number) => {
    const movieFound = movies.find((movie) => {
      if (movie.id === movieId) {
        setModalInfoOpen(true);

        return movie;
      }
    });
    setInfoMovie(movieFound as iGetEditMovie);
    return movieFound;
  };

  return (
    <MoviesContext.Provider
      value={{
        userId,
        movies,
        modalUser,
        modalMovie,
        setModalUser,
        setModalMovie,
        setMovies,
        searchMovie,
        setSearchMovie,
        handleClick,
        movieFilter,
        editMovie,
        modalEditOpen,
        setModalEditOpen,
        showModalEditMovie,
        editingMovie,
        movieVerify,
        deleteMovie,
        showModalInfoMovie,
        addMovie,
        setModalAddOpen,
        modalAddOpen,
        modalInfoOpen,
        setModalInfoOpen,
        infoMovie,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};
