import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0008;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  display: flex;
  flex-direction: column;

  form {
    border-radius: 20px;
    background-color: #0008;
    background: linear-gradient(
      to right,
      rgb(36, 36, 62),
      rgb(48, 43, 99),
      rgb(15, 12, 41)
    );
    padding: 20px;
  }

  fieldset {
    gap: 10px;
  }

  .buttonSbmt {
    color: var(--color-white);
    font-size: var(--text-default);
    font-weight: bold;
    margin: 0px auto;
    width: 90%;
    background-color: var(--color-secondary);
    padding: 8px 0px;
    border: none;
    border-radius: var(--border-radius);
    transition: all 0.5s ease 0s;
    margin-top: 20px;
    justify-content: center;
    display: flex;
  }

  .buttonClose {
    font-size: var(--text-default);
    background-color: transparent;
    border: none;
    color: var(--color-white);
    font-weight: bold;
  }

  .div-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    h1 {
      font-size: var(--text-default);
      background-color: transparent;
      border: none;
      color: var(--color-white);
      font-weight: bold;
    }
  }
  textarea {
    display: flex;
    margin: 0 auto;
    width: 380px;
    height: 130px;
    background-color: transparent;
    color: white;
    font-weight: bolder;
    border-radius: 4px;
  }
  .sinopse {
    display: flex;
    color: var(--color-white);
    font-size: var(--text-default);
    justify-content: center;
    font-weight: bolder;
  }

  @media (min-width: 700px) {
    form {
    }
  }
`;
