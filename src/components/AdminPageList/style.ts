import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 0px 1rem 2rem;

  div {
    h2 {
      font-size: 27px;
      font-weight: bolder;
      color: white;
      padding: 1rem;
    }
  }
`;

export const StyledSection = styled.section`
  padding: 1rem;
  margin-top: 250px;

  h1 {
    font-size: 30px;
    font-weight: bolder;
    color: white;
    margin-bottom: 3rem;
  }

  i {
    color: var(--color-secondary);
  }

  @media (min-width: 900px) {
    margin-top: 100px;
  }
`;

export const StyledDivButtons = styled.div`
  margin: 0 auto;
`;
