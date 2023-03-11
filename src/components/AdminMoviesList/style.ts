import styled from "styled-components";

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 1200px;
  margin: 0px auto;
  /* height: 100vh; */
  padding: 0px 1rem 2rem;
  margin: 0px auto;

  img {
    width: 100%;
    min-width: 250px;
    max-width: 250px;
    border-radius: 16px;
  }

  h1 {
    font-size: 27px;
    font-weight: bolder;
    color: white;
    margin-bottom: 2rem;
  }

  ul {
    background: linear-gradient(to right, #302b63, #0f0c30);
   
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem;
  }

  li {
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

  @media (min-width: 700px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      border-radius: 8px;
    }
  }

  @media (min-width: 1024px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default StyledMovies;
