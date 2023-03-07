import StyledBodyProfile from "./style";
import StyledCardMovie from "../CardMovie/style";
import CardMovie from "../CardMovie";

const BodyProfile = () => {



  return (
    <StyledBodyProfile>
      <div className="infoUser">
        <h2>
          Olá, <span>Usuário</span>
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