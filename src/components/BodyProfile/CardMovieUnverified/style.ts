import styled from "styled-components";

export const CardMovieUnverifiedStyled = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px 0 var(--color-white);
  border-radius: var(--border-radius);
  padding: 16px;

  img {
    width: 250px;
    height: 250px;
  }

  p {
    color: var(--color-white);
  }
`;
