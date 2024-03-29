import styled from "styled-components";

export const StyledFormModalAddMovie = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  background-color: rgb(0, 0, 0, 0.6);

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 400px;
    max-height: 500px;
  }

  .titleForm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    padding: 15px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    h4 {
      color: var(--color-white);
      font-weight: bold;
    }
    span {
      color: var(--color-white);
      cursor: pointer;
      padding: 1px 8px;
      border-radius: 100%;
      background-color: #6f6d92;
    }
  }
  .boxForm {
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
    padding: 15px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 400px;
    overflow-y: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--color-white);

    label {
      color: var(--color-white);
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
    }
    input {
      padding: 10px;
      color: rgba(255, 255, 255, 0.5);
      outline: none;
      background-color: var(--color-primary);
      border: none;
      font-size: 1rem;
      border-radius: 16px;
      border: 1px solid black;
      margin-bottom: 10px;
    }
    input::placeholder {
      color: #6f6d92;
    }

    textarea {
      padding: 15px;
      color: rgba(255, 255, 255, 0.5);
      outline: none;
      background-color: var(--color-primary);
      border: none;
      font-size: 1rem;
      border-radius: 16px;
      border: 1px solid black;
      margin-bottom: 10px;
    }

    button {
      padding: 15px;
      border: none;
      font-size: 1rem;
      border-radius: 16px;
      font-weight: bold;
      color: var(--color-white);
      background-color: var(--color-secondary);

      transition: all 0.5s;

      :hover {
        box-shadow: inset 0 0 10px 0 var(--color-secondary),
          0 0 15px 0 var(--color-secondary), 0 0 20px 0 var(--color-secondary);
      }
    }

    p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
    }
  }
`;
