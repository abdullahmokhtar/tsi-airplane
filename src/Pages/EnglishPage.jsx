import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";

const EnglishPage = () => {
  return (
    <>
      <Header home="Home" contact="About Us" branches="Our Branches" />
      <Slider
        text1="Tiba Swiss International"
        text2="Aircraft Wash Equipment"
        text3="Airplane Wash Equipment"
      />
    </>
  );
};

export default EnglishPage;
