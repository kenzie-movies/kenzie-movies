import styled from "styled-components";

interface WeeklyMovieCardStyleProps {
  cover: string;
}

export const WeeklyMovieCardStyle = styled.li<WeeklyMovieCardStyleProps>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.cover});

  height: 50vh;
  cursor: grab;
`;

export const SwiperPagination = styled.div`
  .swiper-pagination-bullet {
    width: 10px;
    height: 50px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
  .swiper-pagination-bullet-active {
    background-color: #555;
  }
`;
