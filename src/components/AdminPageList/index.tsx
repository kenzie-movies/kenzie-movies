import AdminCardMovie from "../AdminCardMovie";
import { StyledContainer, StyledSection } from "./style";
import AdminMoviesList from "../AllMoviesList";

function AdminList() {
  return (
    <StyledContainer>
      <StyledSection>
        <h1> Olá, Admin!</h1>
      </StyledSection>

      <div>
        <AdminMoviesList></AdminMoviesList>
      </div>

      <div>
        <h2>Filmes solicitados</h2>
        <AdminCardMovie></AdminCardMovie>
      </div>
    </StyledContainer>
  );
}

export default AdminList;
