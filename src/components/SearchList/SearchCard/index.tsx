import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import { UserContext } from "../../../providers/UserContext";
import { iSearchCardProps } from "./@types";
import { SearchCardStyle } from "./style";

const SearchCard = ({ movie }: iSearchCardProps) => {
  const { addFavoriteMovie } = useContext(MoviesContext);
  const { user } = useContext(UserContext);

  return (
    <SearchCardStyle image={movie.banner}>
      <img src={movie.cover} alt={movie.name} />
      <div>
        <h2>Sinopse</h2>
        <p>{movie.synopsis}</p>
        <p>
          Data de lançamento: <span>{movie.release}</span>
        </p>
        <p>
          Gênero: <span>{movie.genre}</span>
        </p>
        {!user?.isAdmin && (
          <button onClick={() => addFavoriteMovie(movie.id)}>
            Adicionar aos Favoritos
          </button>
        )}
      </div>
    </SearchCardStyle>
  );
};

export default SearchCard;
