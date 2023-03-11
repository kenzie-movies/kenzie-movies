import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import { InfoMoviesModalStyled } from "./style";

const InfoMoviesModal = () => {
  const { infoMovie, setModalInfoOpen, addFavoriteMovie } =
    useContext(MoviesContext);

  return (
    <InfoMoviesModalStyled>
      <div className="info-modal">
        <header>
          <h2>{infoMovie.name}</h2>
          <button onClick={() => setModalInfoOpen(false)}>X</button>
        </header>
        <section>
          <img src={infoMovie.cover} alt="" />

          <div>
            <p>{infoMovie.release}</p>
            <p>{infoMovie.synopsis}</p>
            <p>{infoMovie.duration}</p>
            <p>{infoMovie.genre}</p>
            <button onClick={() => addFavoriteMovie(infoMovie.id)}>
              Adicionar aos favoritos
            </button>
          </div>
        </section>
      </div>
    </InfoMoviesModalStyled>
  );
};
export default InfoMoviesModal;
