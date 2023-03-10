import Header from "../../components/Header";
import { StyledSection } from "../../components/AdminPageList/style";

import WeeklyMovie from "../../components/WeeklyMovie";
import { StyledWeeklyMovie } from "../../components/WeeklyMovie/style";
import UserMoviesList from "../../components/UserMoviesList";
import ModalAddMovie from "../../components/Modals/ModalAddMovies";
import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import InfoMoviesModal from "../../components/Modals/InfoMoviesModal";

const HomePage = () => {
  const { modalAddOpen, modalInfoOpen } = useContext(MoviesContext);
  return (
    <>
      <Header />
      <StyledSection>
        <h1> Olá, User</h1>
      </StyledSection>
      <StyledWeeklyMovie>
        <WeeklyMovie />
      </StyledWeeklyMovie>
      <UserMoviesList />
      {modalAddOpen && <ModalAddMovie />}
      {modalInfoOpen && <InfoMoviesModal />}
    </>
  );
};
export default HomePage;
