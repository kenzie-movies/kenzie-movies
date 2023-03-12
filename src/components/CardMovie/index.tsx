import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";

const CardMovie = () => {
  const { movies,removedMovie } = useContext(MoviesContext);

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.cover} alt={movie.name} />
          <button type="button" onClick={() =>removedMovie(movie)}>
            Remover
          </button>
        </li>
      ))}
    </>
  );
};

export default CardMovie;
