import { useContext } from "react";
import vingadores from "../../assets/vingadores.svg";
import { MoviesContext } from "../../providers/MoviesContext";
import { StyledButton, StyledContainer } from "./style";

//componente do card de aceitar solicitação de filme

function AdminCardMovie() {
  const { movies } = useContext(MoviesContext);

  return (
    <StyledContainer>
      <ul>
        {movies.map((movie) => (
         !movie.verified &&
         <li>
         <div>
           <img src={movie.cover} alt="" />
         </div>
         <div>
           <h2>Nome: {movie.name}</h2>
           <p>Duração: {movie.duration}</p>
           <p>Categoria: {movie.genre}</p>
           <p>Data de Lançamento:{movie.release}</p>
           <p>Sinopse: {movie.synopsis}</p>
         
           <StyledButton>
             <button>Aceitar</button>
             <button>Rejeitar</button>
           </StyledButton>
         </div>
         </li>
         ))} 
      </ul>
    </StyledContainer>
  );
}

export default AdminCardMovie;



