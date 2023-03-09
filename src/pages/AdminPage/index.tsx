import AdminCardMovie from "../../components/AdminCardMovie";
import AdminList from "../../components/AdminPageList";
import AdminMoviesList from "../../components/AllMoviesList";
import Header from "../../components/Header";
import HeaderAdmin from "../../components/HeaderAdmin";

const AdminPage = () => {
  return (
    <>
      <HeaderAdmin></HeaderAdmin>

      <AdminList></AdminList>
    </>
  );
};

export default AdminPage;
