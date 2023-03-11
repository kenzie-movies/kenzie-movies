import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import StyledMovies from "./style";

function UserMoviesList() {
  const { movies, showModalInfoMovie } = useContext(MoviesContext);

  return (
    <StyledMovies>
      <h1> Todos os Filmes </h1>
      <ul>
        {movies.map(
          (movie) =>
            movie.verified && (
              <li key={movie.id} onClick={() => showModalInfoMovie(movie.id)}>
                <img src={movie.cover} alt={movie.name} />
                <h3>{movie.name}</h3>
              </li>
            )
        )}
      </ul>
    </StyledMovies>
  );
}

export default UserMoviesList;
