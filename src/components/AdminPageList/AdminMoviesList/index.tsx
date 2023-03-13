import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import StyledMovies from "./style";

function AdminMoviesList() {
  const { movies, showModalEditMovie, deleteMovie } = useContext(MoviesContext);

  return (
    <StyledMovies>
      <h1> Todos os Filmes </h1>

      <ul>
        <>
          {movies.map(
            (movie) =>
              movie.verified && (
                <li key={movie.id}>
                  <img src={movie.cover} alt={movie.name} />
                  <button onClick={() => showModalEditMovie(movie.id)}>
                    Editar
                  </button>
                  <button onClick={() => deleteMovie(movie.id)}>Remover</button>
                </li>
              )
          )}
        </>
      </ul>
    </StyledMovies>
  );
}

export default AdminMoviesList;
