import styled from "styled-components";

export const SearchMainStyle = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-top: 250px;

  h2 {
    color: var(--color-white);
    font-size: var(--title-two);
    font-weight: bold;
  }

  @media (min-width: 900px) {
    margin-top: 100px;
  }
`;
