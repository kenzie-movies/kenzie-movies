import { useContext } from "react";
import AdminCardMovie from "../../components/AdminCardMovie";
import AdminList from "../../components/AdminPageList";
import AdminMoviesList from "../../components/AllMoviesList";
import Header from "../../components/Header";
import HeaderAdmin from "../../components/HeaderAdmin";
import ModalEditMovie from "../../components/Modals/ModalEditMovie";
import { MoviesContext } from "../../providers/MoviesContext";

const AdminPage = () => {

  const {modalOpen} = useContext(MoviesContext)

  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <AdminList></AdminList>
      {modalOpen && <ModalEditMovie ></ModalEditMovie>}
    </>
  );
};

export default AdminPage;
