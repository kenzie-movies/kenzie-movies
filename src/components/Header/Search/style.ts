import styled from "styled-components";

export const DivSearchStyle = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;

  button {
    font-size: 30px;
    font-weight: bolder;
    background-color: transparent;
    color: white;
    border: none;
  }

  .inputSearch {
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid var(--color-white);
    padding: 10px;
    width: 245px;
    text-align: center;
    color: white;
    font-weight: bold;
    height: 1rem;
  }
`;
