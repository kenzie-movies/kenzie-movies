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
  const user = JSON.parse(localStorage.getItem("@KenzieMovies:User")!);

  const token = localStorage.getItem("@KenzieMovies:UserToken");

  const [movies, setMovies] = useState<iGetMovies[]>([]);

  const [myFavoriteMovies, setMyFavoriteMovies] = useState<iGetMovies[]>(
    JSON.parse(localStorage.getItem("@KenzieMovies:Favorites")!) || []
  );
  const [searchMovie, setSearchMovie] = useState("");
  const [movieFilter, setMovieFilter] = useState<iGetMovies[]>([]);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalInfoOpen, setModalInfoOpen] = useState(false);
  const [modalMovie, setModalMovie] = useState(false);
  const [modalUser, setModalUser] = useState(false);
  const [editingMovie, setEditingMovie] = useState<iGetEditMovie>({
    name: "",
    synopsis: "",
    cover: "",
    banner: "",
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
    banner: "",
    release: "",
    duration: "",
    genre: "",
    classification: "",
    verified: false,
    id: 0,
  });
  const [myMoviesAdd, setMyMoviesAdd] = useState<iGetMovies[]>([]);
  const [updateMovies, setUpdateMovies] = useState(false);

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
      } catch (error) {
        console.error(error);
      } finally {
        console.clear();
      }
    };

    getMovies();
  }, [updateMovies]);

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
      setUpdateMovies(!updateMovies);
      setModalEditOpen(false);
      toast.success("Filme editado");
    } catch (error) {
      console.log(error);
    } finally {
      console.clear();
    }
  };

  const movieVerify = async (movieId: number) => {
    const movieFound = movies.find(
      (movieNoVerified) => movieId === movieNoVerified.id && movieNoVerified
    );

    const movieVerified = { ...movieFound, verified: true };

    try {
      const response = await api.patch(`/movies/${movieId}`, movieVerified, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUpdateMovies(!updateMovies);
    } catch (error) {
      console.error(error);
    } finally {
      console.clear();
    }
  };

  const deleteMovie = async (movieId: number) => {
    try {
      const response = await api.delete(`/movies/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUpdateMovies(!updateMovies);
      toast.success("Filme deletado");
    } catch (error) {
      console.error(error);
    } finally {
      console.clear();
    }
  };

  const removedMovie = (movieId: number) => {
    const movieFiltered = myFavoriteMovies.filter(
      (movie) => movie.id !== movieId
    );

    setMyFavoriteMovies(movieFiltered);
    toast.success("Filme removido dos favoritos");
  };

  const addMovie = async (data: iGetEditMovie) => {
    const movieData = { ...data, verified: false };

    try {
      const response = await api.post(`/movies`, movieData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUpdateMovies(!updateMovies);
      setModalMovie(false);
      toast.warn("Filme será verificado pelo Admin");
    } catch (error) {
      console.log(error);
    } finally {
      console.clear();
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

  const addFavoriteMovie = (movieId: number) => {
    const movieFound = movies.find((movie) => movie.id === movieId && movie);

    const someMovie = myFavoriteMovies.some((movie) => movie.id === movieId);

    if (someMovie) {
      toast.error("Filme já existe em seus favoritos");
    } else {
      setModalInfoOpen(false);
      setMyFavoriteMovies([...myFavoriteMovies, movieFound!]);
      toast.success("Filme adicionado aos favoritos");
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "@KenzieMovies:Favorites",
      JSON.stringify(myFavoriteMovies)
    );
  }, [myFavoriteMovies]);

  useEffect(() => {
    const getMoviesUser = async () => {
      if (user) {
        try {
          const response = await api.get(`/users/${user.id}?_embed=movies`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMyMoviesAdd(response.data.movies);
        } catch (error) {
          console.error(error);
        } finally {
          // console.clear();
        }
      }
    };

    getMoviesUser();
  }, [updateMovies]);

  return (
    <MoviesContext.Provider
      value={{
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
        removedMovie,
        showModalInfoMovie,
        addMovie,
        modalInfoOpen,
        setModalInfoOpen,
        infoMovie,
        addFavoriteMovie,
        myMoviesAdd,
        myFavoriteMovies,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};
