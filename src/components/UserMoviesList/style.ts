import styled from "styled-components";

const StyledMovies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 90%;
  max-width: 1200px;
  margin: 50px auto;

  h1 {
    font-size: var(--title-one);
    font-weight: bolder;
    color: white;
  }

  ul {
    display: flex;
    gap: 32px;
    background: linear-gradient(to right, #302b63, #0f0c29);

    padding: 25px;


    overflow-x: auto;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;
      width: 250px;

      border-radius: var(--border-radius);
      transition: all 0.5s;
      cursor: pointer;

      img {
        border-radius: var(--border-radius);

        width: 250px;
      }

      h3 {
        color: var(--color-white);
        font-size: var(--title-three);
        font-weight: bold;
      }

      :hover {
        box-shadow: 0 0 15px 0 var(--color-secondary),
          0 0 20px 0 var(--color-secondary), 0 0 25px 0 var(--color-secondary);
        transform: scale(1.05);
      }
    }
  }

  @media (min-width: 700px) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
      border-radius: 8px;
    }
  }
`;

export default StyledMovies;
