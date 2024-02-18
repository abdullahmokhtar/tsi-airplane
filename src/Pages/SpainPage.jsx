import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";

const SpainPage = () => {
  return (
    <>
      <Header
        home="Hogar"
        contact="Sobre nosotros"
        branches="Nuestras tiendas"
      />
      <Slider
        text1="Tiba Internacional Suiza"
        text2="Equipo de lavado de aeronaves"
        text3="Equipo de lavado de aviones"
      />
    </>
  );
};

export default SpainPage;