import Header from "../../components/Header";
import SearchList from "../../components/SearchList";

const SearchPage = () => {
  document.title = "Busca";

  return (
    <>
      <Header />
      <main>
        <h2>Você pesquisou por:</h2>

        <SearchList />
      </main>
    </>
  );
};

export default SearchPage;
