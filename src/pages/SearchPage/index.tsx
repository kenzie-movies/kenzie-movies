import { useContext } from "react";
import Header from "../../components/Header";
import SearchList from "../../components/SearchList";
import { MoviesContext } from "../../providers/MoviesContext";
import { SearchMainStyle } from "./style";

const SearchPage = () => {
  document.title = "Busca";

  const { searchMovie } = useContext(MoviesContext);

  return (
    <>
      <Header />
      <SearchMainStyle>
        <h2>{`Você pesquisou por: ${searchMovie}`}</h2>

        <SearchList />
      </SearchMainStyle>
    </>
  );
};

export default SearchPage;
