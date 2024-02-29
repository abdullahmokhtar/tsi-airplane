import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";
import Benfits from "../Components/Benfits";
import TechData from "../Components/TechData";
import Price from "../Components/Price";
import Partners from "../Components/Partners";

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
        tableHead={[
          "No.",
          "Descripciones de funciones",
          "Detalles de la marca",
          "Observaciones",
        ]}
        tableData={[
          [
            "El equipo de limpieza de aviones utiliza principalmente cañones de agua de alta presión de larga distancia y sistemas de agua de alta presión de corta distancia",
            "Bomba de agua de alta presión La parte del rotor de la bomba está soportada consistentemente por rodamientos en ambos extremos",
            "Alemania pinfl",
          ],
          [
            "Para lavar toda la superficie de aviones grandes y medianos (incluidos el fuselaje, las alas y las manchas de aceite de la cola de los aviones)",
            "la bomba funciona sin problemas",
            "Japón NSK",
          ],
          [
            "Para quitar manchas de aceite y polvo",
            "Esta bomba de 5 salidas es una bomba vertical de una etapa",
          ],
          [
            "Función de detección de rojo y ultravioleta, seguimiento y posicionamiento automático, detección automática las 24 horas",
            "La entrada de la bomba está en dirección horizontal y la salida está dispuesta verticalmente hacia arriba para simplificar la tubería",
            "Alemania FUCHS",
          ],
          [
            "El avión sensor entra, el sistema de cañón de agua se enciende automáticamente, escanea desde",
            "El motor de la bomba es de estructura horizontal, de fácil mantenimiento",
          ],
          [
            "Direcciones de orientación horizontal, vertical e inclinada.",
            "Existen calibres 50, 75, 100, 125, 150 y otros para satisfacer las necesidades de",
            "Francia schneider",
          ],
          [
            "El controlador central emite instrucciones, luego las bombas se ponen en marcha, la válvula se abre",
            "diferentes caudales y elevaciones",
          ],
          [
            "El cañón de agua a alta presión eyacula el avión objetivo",
            "Una vez completada la limpieza, el controlador central enviará instrucciones para dejar de eyacular.",
            "Delta de Taiwán",
          ],
          [
            "A.La aeronave ingresa al área de limpieza B.Autodetección del dispositivo para iniciar A.Mezclar el detergente de limpieza B.Rociar el detergente de limpieza",
            "A. Limpieza con cañón de agua a alta presión B. Limpieza con agua a alta presión",
            "Procedimientos de limpieza",
          ],
          [
            "El avión sensor entra, el sistema de cañón de agua se enciende automáticamente, escanea desde",
            "Aléjate del área de limpieza, la limpieza ha terminado",
          ],
        ]}
      />
      <Price price="Precio" />
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
      <Partners />
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
