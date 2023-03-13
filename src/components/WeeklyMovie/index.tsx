import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";

const WeeklyMovie = () => {
  const { movies, showModalInfoMovie } = useContext(MoviesContext);

  return (
    <>
      <h2>Vingadores: Ultimato</h2>
      <button onClick={() => showModalInfoMovie(movies[1].id)}>
        Ver Sinopse
      </button>
    </>
  );
};
export default WeeklyMovie;
