import { useContext, useState } from "react";
import harryPotter from "../../assets/harryPotter.svg";
import { MoviesContext } from "../../providers/MoviesContext";
import StyledMovies from "./style";

function AdminMoviesList() {
  const { movies, setModalOpen} = useContext(MoviesContext);


  return (
    <StyledMovies>
      <h1> Todos os Filmes </h1>
      <>
        {movies.map((movie) => 
        <li key={movie.id}>
            <img src={movie.cover} alt={movie.name} />
            <button onClick={() => setModalOpen(true)}>Editar</button>
            <button>Remover</button>
          </li>)}
      </>
    </StyledMovies>
  );
}

export default AdminMoviesList;
