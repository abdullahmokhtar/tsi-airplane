import priceImg from "../assets/imgs/price.png";
import React from "react";

const Price = ({price}) => {
  return (
    <div className="container">
      <p class="text-center fw-bolder fs-1">{price}</p>
      <a href="mailto:info@tibaswiss.ch">
        <img src={priceImg} alt="price" className="m-auto d-block w-25" />
      </a>
    </div>
  );
};

export default Price;
