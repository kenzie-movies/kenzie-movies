import { useContext } from "react";
import StyledBodyProfile from "./style";
import StyledCardMovieAdd from "./CardMovieAdd/style";
import CardMovie from "./CardMovie";
import { UserContext } from "../../providers/UserContext";
import StyledCardMovie from "./CardMovie/style";
import CardMovieAdd from "./CardMovieAdd";

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

      <StyledCardMovieAdd>
        <CardMovieAdd />
      </StyledCardMovieAdd>
    </StyledBodyProfile>
  );
};
export default BodyProfile;
