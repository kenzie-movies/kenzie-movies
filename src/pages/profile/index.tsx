import StyledProfile from "./style";
import BodyProfile from "../../components/BodyProfile";
import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import { FormModalAddMovie } from "../../components/Forms/FormModalAddMovie";
import { StyledFormModalAddMovie } from "../../components/Forms/FormModalAddMovie/style";
import { StyledFormModalEditUser } from "../../components/Forms/FormModalEditUser/style";
import { FormModalEditUser } from "../../components/Forms/FormModalEditUser";
import Header from "../../components/Header";

const Profile = () => {
  const { modalMovie, modalUser } = useContext(MoviesContext);

  return (
    <StyledProfile>
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
    </StyledProfile>
  );
};
export default Profile;
