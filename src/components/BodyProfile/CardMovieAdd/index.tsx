import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import CardMovieUnverified from "../CardMovieUnverified";

const CardMovieAdd = () => {
  const { myMoviesAdd } = useContext(MoviesContext);

  return (
    <>
      {myMoviesAdd.length > 0 ? (
        myMoviesAdd.map((myMovie) =>
          myMovie.verified ? (
            <li key={myMovie.id}>
              <img src={myMovie.cover} alt={myMovie.name} />
            </li>
          ) : (
            <CardMovieUnverified key={myMovie.id} />
          )
        )
      ) : (
        <h3>Você ainda não adicionou filmes a plataforma</h3>
      )}
    </>
  );
};

export default CardMovieAdd;
