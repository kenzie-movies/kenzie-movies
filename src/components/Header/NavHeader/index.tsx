import { TbMovie } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { MoviesContext } from "../../../providers/MoviesContext";
import { Link, useLocation } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const NavHeader = () => {
  const { userLogOut } = useContext(UserContext);

  const { setModalMovie, setModalUser } = useContext(MoviesContext);

  const location = useLocation();
  const { pathname } = location;

  return (
    <nav>
      {pathname === "/home" ? null : (
        <Link to={"/home"} className="icon-back">
          <MdArrowBack size={30} />
          Voltar
        </Link>
      )}
      {pathname === "/admin" || pathname === "/search" ? null : (
        <button className="icon-movie" onClick={() => setModalMovie(true)}>
          <TbMovie size={30} />
          Solicitar Filme
        </button>
      )}

      {pathname === "/home" || pathname === "/search" ? (
        <Link to={"/profile"} className="icon-go-profile">
          <CgProfile size={30} />
          Seu Perfil
        </Link>
      ) : pathname === "/admin" ? null : (
        <button className="icon-profile" onClick={() => setModalUser(true)}>
          <CgProfile size={30} />
          Editar Perfil
        </button>
      )}
      <button className="icon-getout" onClick={userLogOut}>
        <HiOutlineArrowRightOnRectangle size={30} />
        Sair
      </button>
    </nav>
  );
};

export default NavHeader;
