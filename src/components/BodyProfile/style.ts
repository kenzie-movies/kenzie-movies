import styled from "styled-components";

const StyledBodyProfile = styled.main`
  padding: 0 1rem;
  margin: 0 auto;
  padding-bottom: 2rem;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  padding: 2px 2rem 29rem;

  .infoUser {
    margin: 1rem 0;

    h2 {
      font-size: 30px;
    font-weight: bolder;
    color: white;
    margin-bottom: 3rem
    }

    span{
      color: var(--color-secondary);

    }

    p {
      font-size: 27px;
      font-weight: bolder;
      color: white;
      margin-bottom: 2rem;
    }
  }

  .myMoviesFavorites {
    background-color: #2f2a61;
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
  }

  .moviesAdd {
    margin: 3rem 0;
    p {
      font-size: 27px;
      font-weight: bolder;
      color: white;
    }
  }

  .myMoviesAdd {
    background-color: #2f2a61;
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
    }
  }

  @media (min-width: 768px) {
    .myMoviesFavorites,
    .myMoviesAdd {
      overflow-x: hidden;
      flex-direction: row;
      flex-wrap: wrap;
      place-items: center;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default StyledBodyProfile;
