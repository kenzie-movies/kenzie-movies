import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import { iGetMovies } from "../../../providers/MoviesContext/@types";
import { WeeklyMovieCardStyle } from "./style";

export interface WeeklyMovieCardProps {
  movie: iGetMovies;
}

const WeeklyMovieCard = ({ movie }: WeeklyMovieCardProps) => {
  const { showModalInfoMovie } = useContext(MoviesContext);

  return (
    <WeeklyMovieCardStyle cover={movie.cover}>
      <h2>{movie.name}</h2>
      <button onClick={() => showModalInfoMovie(movie.id)}>Ver Sinopse</button>
    </WeeklyMovieCardStyle>
  );
};

export default WeeklyMovieCard;
