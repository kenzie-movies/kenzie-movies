import styled from "styled-components";

export const RegisterPageStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  margin: 50px 0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 400px;

    a {
      color: var(--color-secondary);
      font-size: var(--text-default);
      font-weight: bold;

      box-shadow: 0 0 10px 0 var(--color-secondary);
      border-radius: var(--border-radius);

      padding: 8px 16px;
      background-color: transparent;

      transition: all 0.5s;

      :hover {
        background: linear-gradient(to right, #be0072, #3c1053);
        color: var(--color-white);
      }
    }
  }
`;
