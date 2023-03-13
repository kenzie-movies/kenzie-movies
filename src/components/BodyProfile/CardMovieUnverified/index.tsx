import icon from "../../../assets/icon.svg";
import { CardMovieUnverifiedStyled } from "./style";

const CardMovieUnverified = () => {
  return (
    <CardMovieUnverifiedStyled className="movie-unverified">
      <img src={icon} />
      <p>Filme aguardando verificação</p>
    </CardMovieUnverifiedStyled>
  );
};

export default CardMovieUnverified;
