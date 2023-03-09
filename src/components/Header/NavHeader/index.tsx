import { TbMovie } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

const NavHeader = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav>
      <button className="icon-movie">
        <TbMovie />
        Solicitar Filme
      </button>
      <button className="icon-profile">
        <CgProfile />
        Seu Perfil
      </button>
      <button className="icon-getout" onClick={userLogout}>
        <HiOutlineArrowRightOnRectangle />
        Sair
      </button>
    </nav>
  );
};

export default NavHeader;
