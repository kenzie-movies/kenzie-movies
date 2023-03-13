import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";

const CardMovie = () => {
  const { myFavoriteMovies, removedMovie } = useContext(MoviesContext);

  return (
    <>
      {myFavoriteMovies.length > 0 ? (
        myFavoriteMovies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.cover} alt={movie.name} />
            <button type="button" onClick={() => removedMovie(movie.id)}>
              Remover
            </button>
          </li>
        ))
      ) : (
        <p>Você ainda não favoritou nenhum filme</p>
      )}
    </>
  );
};

export default CardMovie;
