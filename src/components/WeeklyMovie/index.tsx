import { useContext } from "react";
import { MoviesContext } from "../../providers/MoviesContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import WeeklyMovieCard from "./WeeklyMovieCard";
import { SwiperPagination } from "./WeeklyMovieCard/style";

const WeeklyMovie = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      effect="coverflow"
      autoplay={{ delay: 5000 }}>
      <ul>
        {movies.map((movie) => (
          <SwiperSlide>
            <WeeklyMovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </ul>
      <SwiperPagination />
    </Swiper>
  );
};
export default WeeklyMovie;
