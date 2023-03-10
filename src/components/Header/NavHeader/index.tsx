import { TbMovie } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { MoviesContext } from "../../../providers/MoviesContext";

const NavHeader = () => {
  const { userLogOut } = useContext(UserContext);
  const { setModalAddOpen } = useContext(MoviesContext);

  return (
    <nav>
      <button className="icon-movie" onClick={() => setModalAddOpen(true)}>
        <TbMovie />
        Solicitar Filme
      </button>
      <button className="icon-profile">
        <CgProfile />
        Seu Perfil
      </button>
      <button className="icon-getout" onClick={userLogOut}>
        <HiOutlineArrowRightOnRectangle />
        Sair
      </button>
    </nav>
  );
};

export default NavHeader;
