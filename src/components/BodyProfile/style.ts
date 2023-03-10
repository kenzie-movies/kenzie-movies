import styled from "styled-components";

const StyledBodyProfile = styled.main`
  padding: 0 1rem;
  margin: 0 auto;
  padding-bottom: 2rem;

  .infoUser {
    margin: 1rem 0;

    h2 {
      color: #fff;
      font-weight: bold;

      span {
        color: #be0072;
      }
    }

    p {
      margin: 1.5rem 0;
      color: #fff;
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
    margin: 2rem 0;

    p {
      color: #fff;
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
