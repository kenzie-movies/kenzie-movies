import styled from "styled-components";

export const InitialPageListStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  li {
    display: flex;

    box-shadow: 0 0 5px 0 var(--color-white);
    border-radius: var(--border-radius);
    width: 400px;

    img {
      width: 50%;
      max-width: 200px;
      border-radius: var(--border-radius);
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      width: 50%;
      max-width: 200px;

      h3 {
        color: var(--color-white);
        font-size: var(--title-three);
        font-weight: bold;
      }

      a {
        color: var(--color-white);
        width: 50px;
      }

      .linkedin_icon {
        border-radius: 8px;
        transition: all 0.5s;

        :hover {
          box-shadow: inset 0 0 20px 0 #0077b7, 0 0 5px 0 #0077b7,
            0 0 10px 0 #0077b7, 0 0 30px 0 #0077b7, 0 0 40px 0 #0077b7;

          background-color: #0077b7;
        }
      }

      .github_icon {
        border-radius: 50%;
        transition: all 0.5s;

        :hover {
          box-shadow: inset 0 0 20px 0 #000, 0 0 5px 0 #000, 0 0 10px 0 #000,
            0 0 30px 0 #000, 0 0 40px 0 #000;

          background-color: #000;
        }
      }
    }
  }

  @media (min-width: 1500px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
  }
`;
