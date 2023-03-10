import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import { StyledModal } from "../ModalAddMovies/style";

const InfoMoviesModal = () => {
  const { infoMovie, setModalInfoOpen } = useContext(MoviesContext);

  return (
    <>
      <StyledModal>
        <h2>{infoMovie.name}</h2>
        <button onClick={() => setModalInfoOpen(false)}>X</button>
        <div>
          <img src={infoMovie.cover} alt="" />

          <div>
            <p>{infoMovie.release}</p>
            <p>{infoMovie.synopsis}</p>
            <p>{infoMovie.duration}</p>
            <p>{infoMovie.genre}</p>
            <button>Adicionar aos favoritos</button>
          </div>
        </div>
      </StyledModal>
    </>
  );
};
export default InfoMoviesModal;
