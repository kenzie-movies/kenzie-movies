import styled from "styled-components";

export const InfoMoviesModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;

  background-color: #0008;

  .info-modal {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90%;
    padding: 16px;
    border-radius: var(--border-radius);

    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    position: fixed;

    header {
      display: flex;
      align-items: center;
      position: relative;

      text-align: center;

      border-bottom: 2px solid rgb(255, 255, 255, 10%);
      margin-bottom: 16px;

      h2 {
        color: var(--color-white);
        font-size: var(--title-two);
        font-weight: bold;
        margin-right: 24px;
      }

      button {
        position: absolute;
        top: 0;
        right: 0;

        color: var(--color-white);
        border: none;
        background-color: transparent;
        font-size: var(--text-default);

        padding: 4px 8px;
        border-radius: 100%;
        background-color: #6f6d92;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      height: 100%;
      overflow-y: auto;

      img {
        width: 200px;

        margin: auto 0;
        border-radius: var(--border-radius);
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;

        color: var(--color-white);
        text-align: center;

        p {
          font-size: var(--text-default);
          font-weight: bold;
        }

        button {
          color: var(--color-white);
          font-size: var(--text-default);
          font-weight: bold;

          margin: 0 auto;
          width: 90%;
          background-color: var(--color-secondary);
          padding: 8px 0;
          border: none;
          border-radius: var(--border-radius);

          transition: all 0.5s;

          :hover {
            box-shadow: inset 0 0 20px 0 var(--color-secondary),
              0 0 30px 0 var(--color-secondary),
              0 0 40px 0 var(--color-secondary);
          }
        }
      }
    }
  }

  @media (min-width: 1180px) {
    .info-modal {
      width: 50vw;
      height: 60vh;

      section {
        flex-direction: row;
        overflow: hidden;

        div {
          height: 100%;
          overflow-y: auto;
        }
      }
    }
  }
`;
