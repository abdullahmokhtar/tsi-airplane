import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";
import Benfits from "../Components/Benfits";
import TechData from "../Components/TechData";

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
      <Benfits
        secTitle="Características y ventajas"
        benfitsList={[
          "Más limpio para los aviones",
          "Ahorra tiempos y Energía sólo 30 min",
          "Prevención de la oxidación de las aeronaves",
          "Amistoso y mantener la prueba",
          "Fácil de usar, operar y mantener",
          "Proyecto de nueva idea",
        ]}
      />
      <TechData
        secTitle="Datos técnicos"
        tableData={[
          [
            "No.",
            "Descripciones de funciones",
            "Detalles de la marca",
            "Observaciones",
          ],
          [
            "El equipo de limpieza de aviones utiliza principalmente cañones de agua de alta presión de larga distancia y sistemas de agua de alta presión de corta distancia",
            "Bomba de agua de alta presión La parte del rotor de la bomba está soportada consistentemente por rodamientos en ambos extremos",
            "Alemania pinfl",
          ],
        ]}
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
