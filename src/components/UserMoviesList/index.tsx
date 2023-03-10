import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import StyledMovies from "./style";

function UserMoviesList() {
  const { movies, showModalInfoMovie } = useContext(MoviesContext);

  return (
    <StyledMovies>
      <h1> Todos os Filmes </h1>
      <>
        {movies.map(
          (movie) =>
            movie.verified && (
              <li key={movie.id} onClick={() => showModalInfoMovie(movie.id)}>
                <img src={movie.cover} alt={movie.name} />
              </li>
            )
        )}
      </>
    </StyledMovies>
  );
}

export default UserMoviesList;
