import styled from "styled-components";

export const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 70%;
  max-width: 336px;

  background: linear-gradient(to right, #be0072, #3c1053);
  padding: 32px;

  box-shadow: 0 0 10px 0 var(--color-secondary);
  border-radius: var(--border-radius);

  h2 {
    color: var(--color-white);
    font-size: var(--title-two);
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
  }

  button {
    background-color: var(--color-primary);

    color: var(--color-white);
    font-size: var(--text-default);
    font-family: "Inter", sans-serif;

    padding: 8px 16px;

    border: 2px solid var(--color-primary);
    border-radius: var(--border-radius);

    transition: all 1s;

    :hover {
      color: var(--color-secondary);
      background: linear-gradient(to right, #302b63, #0f0c29);
    }
  }

  p {
    color: var(--color-white);
    font-size: var(--text-small);
    text-align: center;
  }

  a {
    color: var(--color-white);
    text-align: center;

    width: 100%;
    padding: 8px 0;

    border: 2px solid var(--color-primary);
    border-radius: var(--border-radius);

    transition: all 1s;

    :hover {
      color: var(--color-secondary);
      background: linear-gradient(to right, #302b63, #0f0c29);
    }
  }
`;
