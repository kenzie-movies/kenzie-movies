import Header from "../../components/Header";
import { StyledSection } from "../../components/AdminPageList/style";
import WeeklyMovie from "../../components/WeeklyMovie";
import UserMoviesList from "../../components/UserMoviesList";
import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";
import InfoMoviesModal from "../../components/Modals/InfoMoviesModal";
import { StyledFormModalAddMovie } from "../../components/Forms/FormModalAddMovie/style";
import { FormModalAddMovie } from "../../components/Forms/FormModalAddMovie";
import { UserContext } from "../../providers/UserContext";
import { motion } from "framer-motion";
import { StyledWeeklyMovie } from "../../components/WeeklyMovie/style";

const HomePage = () => {
  const { modalMovie, modalInfoOpen } = useContext(MoviesContext);
  const { user } = useContext(UserContext);

  document.title = "Kenzie Movies";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}>
      <Header />
      <StyledSection>
        <h1> Olá, {user?.name}</h1>
      </StyledSection>
      <StyledWeeklyMovie>
        <WeeklyMovie />
      </StyledWeeklyMovie>
      <UserMoviesList />
      {modalMovie && (
        <StyledFormModalAddMovie>
          <FormModalAddMovie />
        </StyledFormModalAddMovie>
      )}
      {modalInfoOpen && <InfoMoviesModal />}
    </motion.div>
  );
};
export default HomePage;
