import { useContext } from "react";
import AdminList from "../../components/AdminPageList";
import Header from "../../components/Header";
import ModalEditMovie from "../../components/Modals/ModalEditMovie";
import { MoviesContext } from "../../providers/MoviesContext";
import { motion } from "framer-motion";

const AdminPage = () => {
  const { modalEditOpen } = useContext(MoviesContext);

  document.title = "Admin";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <Header></Header>
      <AdminList></AdminList>
      {modalEditOpen && <ModalEditMovie></ModalEditMovie>}
    </motion.div>
  );
};

export default AdminPage;
