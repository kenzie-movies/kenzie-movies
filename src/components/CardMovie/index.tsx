import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";

const CardMovie = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.cover} alt="" />
          <button>Remover</button>
        </li>

    </>
  );
};

export default CardMovie;
