import styled from "styled-components";

export const StyledWeeklyMovie = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://www.10wallpaper.com/wallpaper/3840x2160/1905/Avengers_Endgame_2019_Film_High_Quality_Poster_3840x2160.jpg);

  background-size: cover;
  background-position-y: -200px;

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
