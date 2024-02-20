import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";

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
      <Branches
        secTitle="Nuestras tiendas"
        countryNames={[
          "Suiza",
          "Egipto",
          "UAE",
          "KSA",
          "EE.UU",
          "Canadá",
          "Brasil",
        ]}
        address={[
          "Tiba swiss GmBH Poststrasse17, 2504 Biel, Suiza .",
          "Tiba swiss GmBH Egipto, Sharkia, Kafr Saqr, barrio de Al-Nasr",
          "Tiba swiss GmBH, Dubai business bay, park Line toweroffice 2108 Dubai.",
          "Arabia Saudita, ciudad Riad",
        ]}
        message="Muy pronto"
      />
      <Footer
        secTitle="Contacta con nosotras"
        title1="Póngase en contacto"
        title2="Envíanos un mensaje"
        description="Manténgase siempre en contacto con nosotros a través de correo electrónico o WhatsApp y le
                 Le responderemos lo antes posible."
        building="Nombre de la empresa"
        buildingDesc="TIBA SWISS GMBH"
        location="Ubicación"
        locationDesc="Poststrasse 17 2504 Biel/Bienne, Suiza"
        mail="Correo electrónico"
        placeholder1="Nombre"
        placeholder2="Asunto"
        placeholder3="Mensaje"
        submit="Enviar mensaje"
      />
    </>
  );
};

export default SpainPage;
