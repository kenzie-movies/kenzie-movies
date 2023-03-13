import BodyProfile from "../../components/BodyProfile";
import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import { FormModalAddMovie } from "../../components/Forms/FormModalAddMovie";
import { StyledFormModalAddMovie } from "../../components/Forms/FormModalAddMovie/style";
import { StyledFormModalEditUser } from "../../components/Forms/FormModalEditUser/style";
import { FormModalEditUser } from "../../components/Forms/FormModalEditUser";
import Header from "../../components/Header";
import { motion } from "framer-motion";

const Profile = () => {
  const { modalMovie, modalUser } = useContext(MoviesContext);

  document.title = "Perfil";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <Header />

      {modalMovie && (
        <StyledFormModalAddMovie>
          <FormModalAddMovie />
        </StyledFormModalAddMovie>
      )}

      {modalUser && (
        <StyledFormModalEditUser>
          <FormModalEditUser />
        </StyledFormModalEditUser>
      )}

      <BodyProfile />
    </motion.div>
  );
};
export default Profile;
