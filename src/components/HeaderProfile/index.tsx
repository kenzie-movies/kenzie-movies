import icon from "../../assets/icon.svg";
import StyledHeader from "./style";
import search from "../../assets/search.svg";
import movies from "../../assets/movies.svg";
import profile from "../../assets/profile.svg";
import exit from "../../assets/exit.svg";
import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";

const HeaderProfile = () => {
  // const { userLogOut } useContext(UserContext);
  const { setModalMovie, setModalUser } = useContext(MoviesContext);

  return (
    <StyledHeader>
      <div className="logoHeader">
        <img src={icon} alt="Logo kenzie movies" />
        <h3>
          Kenzie <span> Movies</span>
        </h3>
      </div>

      <nav>
        <div className="search">
          <input type="text" placeholder="Pesquise um filme" />

          <img src={search} alt="" onClick={() => console.log("Pesquisou")} />
        </div>

        <div className="navigation">
          <img src={movies} alt="" onClick={() => setModalMovie(true)} />
          <img src={profile} alt="" onClick={() => setModalUser(true)} />
          <img src={exit} onClick={() => console.log("Quer sair")} alt="" />
        </div>
      </nav>
    </StyledHeader>
  );
};
export default HeaderProfile;
