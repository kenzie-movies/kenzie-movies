import styled from "styled-components";

export const StyledWeeklyMovie = styled.div`
  height: 50vh;

  position: relative;

  h2 {
    font-size: 30px;
    font-weight: bolder;
    color: white;
    padding: 32px 0 0 32px;
    line-height: 150%;
  }

  button {
    margin-left: 1rem;
    font-size: 20px;
    width: 60%;
    max-width: 300px;
    margin-top: 4rem;
    background-color: #be0072;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    padding: 15px 20px;
    text-align: center;

    position: absolute;
    bottom: 32px;
    left: 32px;
    transition: all 0.5s;

    :hover {
      box-shadow: inset 0 0 20px 0 var(--color-secondary),
        0 0 30px 0 var(--color-secondary), 0 0 40px 0 var(--color-secondary);
    }
  }
`;
