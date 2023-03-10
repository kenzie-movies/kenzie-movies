import styled from "styled-components";

export const InputPasswordStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 4px;

  text-align: center;

  label {
    color: var(--color-white);
    font-size: var(--text-default);
    font-weight: bold;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: transparent;

    border: 2px solid var(--color-primary);
    border-radius: var(--border-radius);

    padding: 0 16px;

    input {
      font-family: "Inter", sans-serif;
      color: var(--color-white);
      font-size: var(--text-small);

      width: 90%;
      background-color: transparent;

      border: none;

      ::placeholder {
        color: var(--color-white);
      }
    }

    button {
      width: 10%;
      padding-right: 10px;
      color: var(--color-white);
      background-color: transparent;
      border: none;

      :hover {
        filter: brightness(0.5);
        background: transparent;
        color: var(--color-white);
      }
    }
  }

  span {
    text-align: start;
    color: var(--color-white);
    font-size: var(--text-nano);
    font-weight: bold;
  }
`;
