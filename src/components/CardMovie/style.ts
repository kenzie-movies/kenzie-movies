import styled from "styled-components";

const StyledCardMovie = styled.ul`
   background-color:#2F2A61;
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem;

    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      img {
        width: 100%;
        min-width: 150px;
      }

      button{
        background-color: #BE0072;
        color: #fff;
        font-weight: bold;
        border: none;
        border-radius: 16px;
        padding: 5px 20px;
        text-align: center;
      }
    }
  

`
export default StyledCardMovie;