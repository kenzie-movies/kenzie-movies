import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import SearchCard from "./SearchCard";

const SearchList = () => {
  const { movieFilter } = useContext(MoviesContext);

  return (
    <ul>
      {movieFilter.map((movie) => (
        <SearchCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default SearchList;
