import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";

const GermanyPage = () => {
  return (
    <>
      <Header home="Heim" contact="Über uns" branches="Unsere Filialen" />
      <Slider
        text1="Tiba Swiss International"
        text2="Flugzeugwaschanlagen"
        text3="Flugzeugwaschausrüstung"
      />
    </>
  );
};

export default GermanyPage;
