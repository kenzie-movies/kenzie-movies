import logo from "../../assets/logo.svg";
import StyledHeader, { StyledDivButtons, StyledDivSearch } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

function HeaderAdmin() {
  return (
    <StyledHeader>
      <div className="logo-container">
        <img src={logo} alt="Logo da aplicação" />
      </div>
      <StyledDivSearch>
        <input type="text" placeholder="Pesquisar filme" />
        <button>
          <AiOutlineSearch className="icon-search" />
        </button>
      </StyledDivSearch>
      <StyledDivButtons>
        <button>
          <TbMovie className="icon-movie" />
          Solicitar Filme
        </button>
        <button>
          <CgProfile className="icon-profile" />
          Seu Perfil
        </button>
        <button>
          <HiOutlineArrowRightOnRectangle className="icon-getout" />
          Sair
        </button>
      </StyledDivButtons>
    </StyledHeader>
  );
}

export default HeaderAdmin;
