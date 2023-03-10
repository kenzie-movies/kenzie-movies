import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import SearchCard from "./SearchCard";
import { SearchListStyle } from "./style";

const SearchList = () => {
  const { movieFilter } = useContext(MoviesContext);

  return (
    <SearchListStyle>
      {movieFilter.map((movie) => (
        <SearchCard key={movie.id} movie={movie} />
      ))}
    </SearchListStyle>
  );
};

export default SearchList;
