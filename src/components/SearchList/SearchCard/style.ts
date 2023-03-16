import styled from "styled-components";

interface SearchCardStyleProps {
  image: string;
}

export const SearchCardStyle = styled.li<SearchCardStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  padding: 0 32px;
  width: 80%;
  border-radius: var(--border-radius);

  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.image});
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  box-shadow: 0 0 10px 0 var(--color-secondary);

  img {
    width: 200px;
    border-radius: var(--border-radius);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    text-align: center;
    padding: 16px 0;

    h2 {
      color: var(--color-secondary);
      font-size: var(--title-two);
      font-weight: bold;
    }

    p {
      color: var(--color-white);
      font-size: var(--text-default);
      font-weight: bold;

      span {
        font-weight: normal;
      }
    }

    button {
      color: var(--color-white);
      font-size: var(--text-default);
      font-weight: bold;

      margin: 0 auto;
      width: 90%;
      background-color: var(--color-secondary);
      padding: 8px 0;
      border: none;
      border-radius: var(--border-radius);

      transition: all 0.5s;

      :hover {
        box-shadow: inset 0 0 20px 0 var(--color-secondary),
          0 0 30px 0 var(--color-secondary), 0 0 40px 0 var(--color-secondary);
      }
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    width: 90%;

    div {
      button {
        width: 50%;
      }
    }
  }
`;
