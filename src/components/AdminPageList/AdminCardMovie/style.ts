import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 12px;
  p{
    color: white;
    font-weight: bolder;
    font-size: 20px;
  }

  @media (min-width: 500px) {
    li {
    display: flex;
  }
  }


    h2 {
      font-size: 2px;
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
      margin-top: 15px;
      font-size: 25px;
      color: white;
      font-weight: bold;
      padding: 10px;
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
