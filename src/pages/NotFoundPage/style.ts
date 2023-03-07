import styled from "styled-components";

export const NotFoundStyle = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 64px;
  margin-top: 50px;

  height: 100vh;

  .section_one {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;

    width: 90%;
    height: 100%;

    img {
      width: 100%;
      max-width: 300px;
    }

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 32px;

      text-align: center;

      width: 100%;
      max-width: 400px;

      img {
        width: 100%;
      }

      h2 {
        color: var(--color-white);
        font-size: var(--title-two);
        font-weight: bold;
      }

      a {
        text-align: center;
        color: var(--color-white);
        font-size: var(--text-default);
        font-weight: bold;

        width: 100%;
        background-color: var(--color-secondary);
        padding: 8px 0;
        border-radius: var(--border-radius);

        transition: all 0.5s;

        :hover {
          box-shadow: inset 0 0 20px 0 var(--color-secondary),
            0 0 30px 0 var(--color-secondary), 0 0 40px 0 var(--color-secondary);
        }
      }
    }
  }

  .section_two {
    display: flex;
    justify-content: center;

    background: linear-gradient(to right, #be0072, #3c1053);

    width: 100%;
    height: 100%;

    img {
      width: 100%;
      max-width: 500px;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    margin-top: 0;
    height: 90vh;

    .section_one {
      justify-content: center;
      gap: 100px;

      width: 70%;

      div {
        gap: 64px;

        a {
          width: 50%;
        }
      }
    }

    .section_two {
      width: 35%;
      height: 100vh;
      align-items: flex-end;
      position: fixed;
      top: 0;
      right: 0;

      img {
        height: 400px;
      }
    }
  }

  @media (min-width: 1180px) {
    .section_two {
      img {
        height: 500px;
      }
    }
  }
`;
