import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import SearchCard from "./SearchCard";
import { SearchListStyle } from "./style";

const SearchList = () => {
  const { movieFilter } = useContext(MoviesContext);

  return (
    <SearchListStyle>
      {movieFilter.length > 0 ? (
        movieFilter.map(
          (movie) =>
            movie.verified && <SearchCard key={movie.id} movie={movie} />
        )
      ) : (
        <h2>Por favor preencha a pesquisa</h2>
      )}
    </SearchListStyle>
  );
};

export default SearchList;
