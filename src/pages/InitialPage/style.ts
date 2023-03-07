import styled from "styled-components";

export const InitialPageStyle = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;

  aside {
    width: 90%;

    h2 {
      font-size: var(--title-two);
      font-weight: bold;
      color: var(--color-secondary);

      margin-bottom: 50px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    width: 90%;
    margin: 50px 0;

    img {
      width: 300px;
    }

    p {
      color: var(--color-white);
      font-size: var(--text-default);
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

  @media (min-width: 1024px) {
    margin-top: 100px;
    gap: 64px;

    aside {
      width: 50%;
    }

    section {
      width: 30%;
      margin: 100px 0 0 0;
    }
  }
`;
