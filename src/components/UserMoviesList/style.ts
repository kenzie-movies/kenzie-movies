import styled from "styled-components";

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
 

  img {
    /* display: flex;
      margin: 0 auto; */
    width: 12rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 20px;
    font-weight: bolder;
    color: white;
    margin-bottom: 3rem;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 200px;
    display: flex;
    align-items: center;
    padding: 1rem;
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
`;

export default StyledMovies;
