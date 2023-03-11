import { useContext } from "react";
import AdminList from "../../components/AdminPageList";
import Header from "../../components/Header";
import ModalEditMovie from "../../components/Modals/ModalEditMovie";
import { MoviesContext } from "../../providers/MoviesContext";

const AdminPage = () => {
  const { modalEditOpen } = useContext(MoviesContext);

  document.title = "Admin";

  return (
    <>
      <Header></Header>
      <AdminList></AdminList>
      {modalEditOpen && <ModalEditMovie></ModalEditMovie>}
    </>
  );
};

export default AdminPage;
