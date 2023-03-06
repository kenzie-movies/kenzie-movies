import styled from "styled-components";

export const InputStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 4px;

  text-align: center;

  label {
    color: var(--color-white);
    font-size: var(--text-default);
    font-weight: bold;
  }

  input {
    font-family: "Inter", sans-serif;
    font-size: var(--text-small);
    color: var(--color-white);
    background-color: transparent;

    border: 2px solid var(--color-primary);
    border-radius: var(--border-radius);

    padding: 8px 16px;

    ::placeholder {
      color: var(--color-white);
    }
  }

  span {
    text-align: start;
    color: var(--color-white);
    font-size: var(--text-nano);
    font-weight: bold;
  }
`;
