import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import icon from "../../assets/icon.svg";

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
            <li key={myMovie.id} className="movie-no-verified">
              <img src={icon} />
              <p>Filme aguardando verificação</p>
            </li>
          )
        )
      ) : (
        <p>Você ainda não adicionou filmes a plataforma</p>
      )}
    </>
  );
};

export default CardMovieAdd;
