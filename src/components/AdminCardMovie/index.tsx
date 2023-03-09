import { useContext } from "react";
import vingadores from "../../assets/vingadores.svg";
import { MoviesContext } from "../../providers/MoviesContext";
import { StyledButton, StyledContainer } from "./style";

//componente do card de aceitar solicitação de filme

function AdminCardMovie() {
  const { movies, movieVerify, deleteMovie } = useContext(MoviesContext);

  const unverifiedMovies = movies.filter((movie) => !movie.verified);

  return (
    <StyledContainer>
      <ul>
        {unverifiedMovies.length ? (
          unverifiedMovies.map(
            (movie) =>
              !movie.verified && (
                <li key={movie.id}>
                  <div>
                    <img src={movie.cover} alt={movie.name} />
                  </div>
                  <div>
                    <h2>Nome: {movie.name}</h2>
                    <p>Duração: {movie.duration}</p>
                    <p>Categoria: {movie.genre}</p>
                    <p>Data de Lançamento:{movie.release}</p>
                    <p>Sinopse: {movie.synopsis}</p>

                    <StyledButton>
                      <button onClick={() => movieVerify(movie.id)}>
                        Aceitar
                      </button>
                      <button onClick={() => deleteMovie(movie.id)}>
                        Rejeitar
                      </button>
                    </StyledButton>
                  </div>
                </li>
              )
          )
        ) : (
          <p>Não existem filmes a serem verificados</p>
        )}
      </ul>
    </StyledContainer>
  );
}

export default AdminCardMovie;
