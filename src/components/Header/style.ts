import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0px auto;
  display: none;
  flex-direction: column;
  align-items: center;

  padding: 16px 0;

  border-bottom: 2px solid rgb(255, 255, 255, 10%);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);

  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 11;

  .icon-movie,
  .icon-profile,
  .icon-getout {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
  }

  .icon-back {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    color: white;
    font-weight: bold;
    font-size: 15px;
  }

  .icon-go-profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

    color: white;
    font-weight: bold;
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
    display: flex;
  }
`;

interface StyledHeaderMobileProps {
  isOpen: boolean;
}

export const StyledHeaderMobile = styled.header<StyledHeaderMobileProps>`
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;

  border-bottom: 2px solid rgb(255, 255, 255, 10%);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);

  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 11;

  .bars {
    background-color: transparent;
    border: none;
    color: var(--color-white);
    margin-right: 16px;
  }

  .menu-mobile {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: baseline;
    position: absolute;
    top: 70px;
    right: 10px;
    padding: 16px;

    background: linear-gradient(to right, #302b63, #0f0c29);
    border-radius: var(--border-radius);

    div {
      .inputSearch {
        width: 100%;
      }
    }

    .icon-movie,
    .icon-profile,
    .icon-getout {
      display: flex;
      font-size: 15px;
      font-weight: bold;
    }

    .icon-back {
      display: flex;
      color: white;
      font-weight: bold;
      font-size: 15px;
    }

    .icon-go-profile {
      display: flex;
      align-items: center;
      padding: 10px;
      color: white;
      font-weight: bold;
      font-size: 15px;
    }

    nav {
      display: flex;
      flex-direction: column;
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
  }

  @media (min-width: 900px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: none;
  }
`;
