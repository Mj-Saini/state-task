import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center">
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-info">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-dark text-white">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-secondary">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-success">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-primary">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-warning">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-black text-light">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-white">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center fs-1 bg-info">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
