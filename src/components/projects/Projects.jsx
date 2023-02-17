import React from "react";
import "./projects.css";
import Data from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Mes réalisations</h2>
      <span className="section__subtitle">Projets en tout genre</span>

      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="projects__container"
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="projects__card" key={id}>
              <img src={image} alt={title} className="projects__img" />
              <h3 className="projects__name">{title}</h3>
              <p className="projects__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
