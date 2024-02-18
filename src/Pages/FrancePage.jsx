import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";

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
    </>
  );
};

export default FrancePage;
