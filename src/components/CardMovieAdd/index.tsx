import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";

const CardMovieAdd = () => {
  const { myMoviesAdd } = useContext(MoviesContext);

  const result = myMoviesAdd.movies;
  // console.log(result)
  return (
    <>
      {result.map(
        (myMovie) =>
          // myMovie.verified && (
            (
            <li key={myMovie.id}>
              <img src={myMovie.cover} alt={myMovie.name} />
            </li>
          )
      )}
    </>
  );
};

export default CardMovieAdd;
