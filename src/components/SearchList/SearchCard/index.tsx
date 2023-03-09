import { iSearchCardProps } from "./@types";

const SearchCard = ({ movie }: iSearchCardProps) => {
  return (
    <li>
      <h2>{movie.name}</h2>
      <img src={movie.cover} alt={movie.name} />
    </li>
  );
};

export default SearchCard;
