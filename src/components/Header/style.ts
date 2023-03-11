import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin-top: 10px;

    color: white;
    font-weight: bolder;
    font-size: 15px;
  }

  .icon-go-profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

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

  @media (min-width: 900px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;
