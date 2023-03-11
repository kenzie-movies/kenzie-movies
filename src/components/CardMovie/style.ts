import styled from "styled-components";

const StyledCardMovie = styled.ul`
    background: linear-gradient(to right, #302b63, #0f0c30);
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
      min-width: 250px;
      max-width: 250px;
      border-radius: 16px;
    }

    button {
      background-color: #be0072;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 16px;
      padding: 5px 20px;
      text-align: center;
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    border-radius: 8px;
    max-width: 1200px;
    margin: 0 auto;

  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export default StyledCardMovie;
