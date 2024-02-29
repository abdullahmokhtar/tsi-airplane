import React from "react";
import img1 from "../assets/imgs/part1.jpg";
import img2 from "../assets/imgs/part2.png";
import img3 from "../assets/imgs/part3.png";

const Partners = ({ secTitle }) => {
  return (
    <section id="partners" className="my-4">
      <div className="container">
        <h2 className="sec-title">{secTitle}</h2>
        <div className="row gy-3 my-3 justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-img">
                <img src={img1} className="w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-img">
                <img src={img2} className="w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-img">
                <img src={img3} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
