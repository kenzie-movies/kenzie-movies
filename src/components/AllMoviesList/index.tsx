import harryPotter from "../../assets/harryPotter.svg";
import StyledMovies from "./style";

function AdminMoviesList() {
  return (
   
    
    <StyledMovies>
        <h1> Todos os Filmes </h1>
      <li>
        <img src={harryPotter} alt="" />
        <button>Remover</button>
      </li>

    </StyledMovies>

  );
}

export default AdminMoviesList;