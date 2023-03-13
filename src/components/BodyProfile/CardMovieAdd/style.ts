import styled from "styled-components";

const StyledCardMovieAdd = styled.ul`
  background-color: #2f2a61;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;

  background: linear-gradient(to right, #302b63, #0f0c29);

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
  }

  h3 {
    color: var(--color-white);
    font-size: var(--title-three);
    font-weight: bold;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export default StyledCardMovieAdd;
