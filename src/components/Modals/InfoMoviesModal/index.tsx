import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import { InfoMoviesModalStyled } from "./style";
import { motion } from "framer-motion";

const InfoMoviesModal = () => {
  const { infoMovie, setModalInfoOpen, addFavoriteMovie } =
    useContext(MoviesContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
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
    </motion.div>
  );
};
export default InfoMoviesModal;
