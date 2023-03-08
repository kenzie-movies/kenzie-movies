import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #1d1741;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.13);
  margin: 0 auto;
  padding: 0.5rem 1rem;

  img {
    cursor: pointer;
  }

  .logoHeader {
    display: flex;
    align-items: center;

    h3 {
      font-family: Arial, Helvetica, sans-serif;
      color: #fff;
      font-weight: bold;

      span {
        color: #be0072;
        font-weight: bold;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .search {
      display: flex;
      align-items: center;

      input {
        background-color: #302d61;
        color: #6f6d92;
        border: 1px solid black;
        border-radius: 1rem;
        padding: 0.5rem;
        outline: none;
        text-align: center;
      }
    }

    .navigation {
      display: flex;
      gap: 1rem;
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;

    nav {
      flex-direction: row;
      gap: 3rem;

      .search {
        align-items: center;
      }

      .navigation {
        gap: 1.5rem;
        align-items: center;
      }
    }
  }
`;
export default StyledHeader;
