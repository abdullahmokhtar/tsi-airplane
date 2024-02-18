import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";

const EnglishPage = () => {
  return (
    <>
      <Header home="Home" contact="About Us" branches="Our Branches" />
      <Slider
        text1="Tiba Swiss International"
        text2="Aircraft Wash Equipment"
        text3="Airplane Wash Equipment"
      />
      <Branches secTitle="Our Branches" />
      <Footer />
    </>
  );
};

export default EnglishPage;
