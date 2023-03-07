import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export interface iGetMovies {
    name: string;
    synopsis:string; 
    cover: string;
    release: string;
    duration: string;
    genre: string;
    classification:string;
    verified: boolean;
    userId: number;
    id: number;
}

const CardMovie = () => {
  const [movies, setMovies] = useState<iGetMovies[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieMovies:UserToken");

    if (token) {
      const getMovies = async () => {
        try {
          const response = await api.get<iGetMovies>(`/movies`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMovies(response.data);
          navigate("/profile");
        } catch (error) {
          console.log(error);
        }
      };
      getMovies();
    }
  }, []);





  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.cover} alt="" />
          <button>Remover</button>
        </li>
      ))}

    </>
  );
};

export default CardMovie;
