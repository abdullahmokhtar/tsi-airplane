import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";

const FrancePage = () => {
  return (
    <>
      <Header
        home="Maison"
        contact="À propos de nous"
        branches="Nos magasins"
      />
      <Slider
        text1="Tiba Suisse International"
        text2="Équipement de lavage d'avions"
        text3="Équipement de lavage d'avion"
      />
      <Branches secTitle="Nos magasins" />
    </>
  );
};

export default FrancePage;
