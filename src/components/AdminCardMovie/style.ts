import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 2rem;
  max-width: 500px;

  @media (min-width: 500px) {
    li {
    display: flex;
  }
  }

  div {
    h2 {
      font-size: 20px;
      font-weight: bolder;
      color: white;
      padding: 10px;
    }
    img {
      display: flex;
      margin: 0 auto;
      width: 12rem;
      margin-bottom: 2rem;
    }
    p {
      color: white;
      font-weight: bold;
      padding: 10px;
    }
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: var(--color-secondary);
    padding: 15px;
    border: none;
    color: white;
    font-weight: bolder;
    border-radius: 20px;
    width: 8rem;
    text-align: center;
  
  }
`;
