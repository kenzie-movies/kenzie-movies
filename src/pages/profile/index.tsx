import StyledProfile from "./style";
import HeaderProfile from "../../components/HeaderProfile";
import BodyProfile from "../../components/BodyProfile";
import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import { FormModalAddMovie } from "../../components/Forms/FormModalAddMovie";
import { StyledFormModalAddMovie } from "../../components/Forms/FormModalAddMovie/style";
import { StyledFormModalEditUser } from "../../components/Forms/FormModalEditUser/style";
import { FormModalEditUser } from "../../components/Forms/FormModalEditUser";

const Profile = () => {
  const { modalMovie, modalUser } = useContext(MoviesContext);

  return (
    <StyledProfile>
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

      <HeaderProfile />
      <BodyProfile />
    </StyledProfile>
  );
};
export default Profile;
