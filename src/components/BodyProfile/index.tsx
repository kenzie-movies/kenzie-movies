import StyledBodyProfile from "./style";
import vingadores from "../../assets/vingadores.svg";
import harryPotter from "../../assets/harryPotter.svg"

const BodyProfile = () => {
  return (
    <StyledBodyProfile>
      <div>
        <h2>
          Olá, <span>Usuário</span>!
        </h2>
        <p>Seus filmes favoritos</p>
      </div>

      <ul className="myMoviesFavorites">
        <li>
          <img src={vingadores} alt="" />
          <button>Remover</button>
        </li>

        <li>
          <img src={vingadores} alt="" />
          <button>Remover</button>
        </li>

        <li>
          <img src={vingadores} alt="" />
          <button>Remover</button>

        </li>

        <li>
          <img src={vingadores} alt="" />
          <button>Remover</button>
        </li>

        <li>
          <img src={vingadores} alt="" />
          <button>Remover</button>
        </li>
      </ul>

      <div>
        <p>Filmes adicionados por você</p>
      </div>

      <ul className="myMoviesAdd">
        <li>
          <img src={harryPotter} alt="" />
        </li>

        <li>
          <img src={harryPotter} alt="" />
        </li>

        <li>
          <img src={harryPotter} alt="" />
        </li>

        <li>
          <img src={harryPotter} alt="" />
        </li>

        <li>
          <img src={harryPotter} alt="" />
        </li>

      </ul>

    </StyledBodyProfile>
  );
};
export default BodyProfile;
