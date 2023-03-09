import { useContext } from "react";
import { MoviesContext } from "../../../providers/MoviesContext";
import { AiOutlineSearch } from "react-icons/ai";
import { DivSearchStyle } from "./style";

const FormSearch = () => {
  const { setSearchMovie, handleClick } = useContext(MoviesContext);

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(event.target.value);
  };

  return (
    <DivSearchStyle>
      <input type="text" onChange={handleInputValue} />
      <button onClick={() => handleClick()}>
        <AiOutlineSearch className="icon-search" />
      </button>
    </DivSearchStyle>
  );
};

export default FormSearch;
