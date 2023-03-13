import { useContext } from "react";
import Header from "../../components/Header";
import SearchList from "../../components/SearchList";
import { MoviesContext } from "../../providers/MoviesContext";
import { SearchMainStyle } from "./style";
import { motion } from "framer-motion";

const SearchPage = () => {
  document.title = "Busca";

  const { searchMovie } = useContext(MoviesContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <Header />
      <SearchMainStyle>
        <h2>{`Você pesquisou por: ${searchMovie}`}</h2>

        <SearchList />
      </SearchMainStyle>
    </motion.div>
  );
};

export default SearchPage;
