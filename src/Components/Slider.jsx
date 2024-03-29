import React from "react";
import img1 from "../assets/imgs/airplane01.jpg";
import img2 from "../assets/imgs/airplane02.jfif";
import img4 from "../assets/imgs/airplane04.jpeg";
import img5 from "../assets/imgs/airplane05.jpeg";
import img6 from "../assets/imgs/airplane06.jpeg";
import video1 from "../assets/videos/washing1.mp4";

const Slider = ({ text1, text2, text3 }) => {
  return (
    <section id="home" className="h-100 pt-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div className="home-text">
            <h3 className="mb-3 fs-4">{text1}</h3>
            <h2 className="fs-2 fw-bold">{text2}</h2>
            <h3 className="mt-3 fs-4">{text3}</h3>
          </div>
          <div className="carousel-item active">
            <img src={img1} className="w-100" alt="cars" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <video
              src={video1}
              loop={true}
              autoPlay
              muted
              type="video/mp4"
            ></video>
          </div>
          <div className="carousel-item">
            <img src={img4} className="w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} className="w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img6} className="w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} className="w-100" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
