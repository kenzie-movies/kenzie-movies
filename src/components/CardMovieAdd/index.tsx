import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";

const CardMovieAdd = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.cover} alt="" />
        </li>
      ))}
    </>
  );
};

export default CardMovieAdd;

