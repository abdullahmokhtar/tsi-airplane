import React from "react";
import img1 from "../assets/imgs/airplane01.jpg";
import img2 from "../assets/imgs/airplane02.jfif";
import img3 from "../assets/imgs/airplane03.jpg";
import img4 from "../assets/imgs/airplane04.jpeg";
import img5 from "../assets/imgs/airplane05.webp";
import img6 from "../assets/imgs/airplane06.jpg";

const Slider = ({text1, text2, text3}) => {
  return (
    <section id="home" class="h-100 pt-0">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="home-text">
            <h3 class="mb-3 fs-4">{text1}</h3>
            <h2 class="fs-2 fw-bold">{text2}</h2>
            <h3 class="mt-3 fs-4">{text3}</h3>
          </div>
          <div class="carousel-item active">
            <img src={img1} class="w-100" alt="cars" />
          </div>
          <div class="carousel-item">
            <img src={img2} class="w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="w-100" alt="home wash" />
          </div>
          <div class="carousel-item">
            <img src={img4} class="w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img5} class="w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img6} class="w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img4} class="w-100" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
