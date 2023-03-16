import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import { InfoMoviesModalStyled } from "./style";
import { motion } from "framer-motion";

const InfoMoviesModal = () => {
  const { infoMovie, setModalInfoOpen, addFavoriteMovie } =
    useContext(MoviesContext);

  return (
    <div>
      <InfoMoviesModalStyled>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 1 }}
          className="info-modal">
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
        </motion.div>
      </InfoMoviesModalStyled>
    </div>
  );
};
export default InfoMoviesModal;
