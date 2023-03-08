import icon from "../../assets/icon.svg";
import StyledHeader from "./style";
import StyledBodyProfile from "../BodyProfile"
import search from "../../assets/search.svg";
import movies from "../../assets/movies.svg";
import profile from "../../assets/profile.svg";
import exit from "../../assets/exit.svg";
import { BiMenu } from "react-icons/bi";

const HeaderProfile = () => {


  return (
    <StyledHeader>
      <div className="logo">
        <img src={icon} alt="Logo kenzie movies" />
        <h3>
          Kenzie <span> Movies</span>
        </h3>

      </div>

      <nav>

   
        <BiMenu color="white" size={40}  onClick={() => console.log('Pesquisou')} />

         {/* <div className="search">
          <input type="text" placeholder="Pesquise um filme" />

          <img src={search} alt=""  onClick={() => console.log('Pesquisou')} />
        </div> 

      
        <div className="navigation">
          <img src={movies} alt="" />
          <img src={profile} alt="" />
          <img src={exit} alt="" />
        </div>  */}

      </nav>
    </StyledHeader>
  );
};
export default HeaderProfile;
