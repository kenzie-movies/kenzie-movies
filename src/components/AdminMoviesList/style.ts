import styled from "styled-components";

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  img {
      /* display: flex;
      margin: 0 auto; */
      width: 250px;
      margin-bottom: 2rem;
      border-radius: 20px;
    }

    h1{
    font-size: 20px;
    font-weight: bolder;
    color: white;
    margin-bottom: 3rem;
}

ul{
  /* background-color: rgb(47, 42, 97); */
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem;
}

  li{
    list-style: none;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 1rem;
   
  }
  button {
    background-color: var(--color-secondary);
    padding: 15px;
    border: none;
    color: white;
    font-weight: bolder;
    border-radius: 20px;
    width: 8rem;
    text-align: center;
   margin-bottom: 15px;
  }

  @media (min-width: 700px){
    ul{
      
      display: flex;
      overflow-x: hidden;
      flex-wrap: wrap;
      
    }
  }

  @media (min-width: 700px){

  }

`;

export default StyledMovies;

