import React from "react";
import "./Testimonials.css";
import img from "../../assets/18.jpg";
import img1 from "../../assets/10.jpg";
import img2 from "../../assets/34.jpg";
import img3 from "../../assets/35.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: img,
    name: "Pierwsza żona była Australijką",
    review:
      "Nola Nicholas (od 1938 do 1947), z którą miał dwójkę dzieci: Zamirę i Krova.",
  },
  {
    avatar: img1,
    name: "Jehudi Menuhin gra swojej córce",
    review: "Zamira Menuhin-Benthall",
  },
  {
    avatar: img2,
    name: "Druga żona",
    review:
      "Primabalerina Diana Gould (od 1947 do 1999), z którą miał dwóch synów: Jeremiego (pianistę) i Gerarda",
  },
  {
    avatar: img3,
    name: "Yehudi Menuhin z żoną Dianą i ich dwuletnim synem Gerardem",
    review: "Jego druga żona podzielała jego miłość do sztuki i rozumiała go.",
  },
];

const Testimonials = () => {
  return (
    <section id="rodzina">
      <h5>Dwie żony, czworo dzieci</h5>
      <h2>Rodzina</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="..." />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
