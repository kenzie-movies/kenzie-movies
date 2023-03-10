import { useContext } from "react";
import StyledBodyProfile from "./style";
import StyledCardMovieAdd from "../CardMovie/style";
import CardMovie from "../CardMovie";
import { UserContext } from "../../providers/UserContext";
import StyledCardMovie from "../CardMovie/style";

const BodyProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledBodyProfile>
      <div className="infoUser">
        <h2>
          Olá, <span>{user?.name}</span>
        </h2>
        <p>Seus filmes favoritos</p>
      </div>

      <StyledCardMovie>
        <CardMovie />
      </StyledCardMovie>

      <div className="moviesAdd">
        <p>Filmes adicionados por você</p>
      </div>

      <StyledCardMovie>
        <CardMovie />
      </StyledCardMovie>
    </StyledBodyProfile>
  );
};
export default BodyProfile;
