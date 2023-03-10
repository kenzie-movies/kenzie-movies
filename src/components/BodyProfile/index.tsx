import { useContext } from "react";
import StyledBodyProfile  from "./style";
import StyledCardMovieAdd from "../CardMovie/style";
import CardMovie from "../CardMovie";
import { UserContext } from "../../providers/UserContext";
import CardMovieAdd from "../CardMovieAdd";
import StyledCardMovie from "../CardMovie/style";

const BodyProfile = () => {
  
  const { nameUser } =  useContext(UserContext);

  return (
    <StyledBodyProfile>
      <div className="infoUser">
        <h2>
          Olá, <span>{nameUser.name}</span>
        </h2>
        <p>Seus filmes favoritos</p>
      </div>

      <StyledCardMovie>
        <CardMovie />
      </StyledCardMovie>

      <div className="moviesAdd">
        <p>Filmes adicionados por você</p>
      </div>

      <StyledCardMovieAdd>
        <CardMovieAdd />
      </StyledCardMovieAdd>
    </StyledBodyProfile>
  );
};
export default BodyProfile;
