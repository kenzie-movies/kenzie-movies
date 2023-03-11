import styled from "styled-components";

export const StyledHeader = styled.header`
  /* max-width: 1200px; */
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-bottom: 2px solid rgb(255, 255, 255, 10%);

  .icon-movie,
  .icon-profile,
  .icon-getout {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    text-align: center;
    margin: 0 auto;
  }

  .icon-back {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    color: white;
    font-weight: bolder;
    font-size: 15px;
  }

  nav {
    display: flex;
    gap: 20px;
  }

  button {
    align-items: center;
    font-weight: bolder;
    background-color: transparent;
    color: white;
    border: none;
    padding: 10px;
  }
`;
