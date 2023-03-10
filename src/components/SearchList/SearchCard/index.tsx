import { iSearchCardProps } from "./@types";
import { SearchCardStyle } from "./style";

const SearchCard = ({ movie }: iSearchCardProps) => {
  return (
    <SearchCardStyle image={movie.cover}>
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
        <button>Adicionar aos Favoritos</button>
      </div>
    </SearchCardStyle>
  );
};

export default SearchCard;
