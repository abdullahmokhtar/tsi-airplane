import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";
import Benfits from "../Components/Benfits";
import TechData from "../Components/TechData";

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
      <Benfits
        secTitle="Caractéristiques et avantages"
        benfitsList={[
          "Plus propre pour l'Avion",
          "Gagnez du temps et de l'énergie seulement 30 min",
          "Prévention de la rouille des avions",
          "Convivial et maintenir la preuve",
          "Facile à utiliser, à exploiter et à entretenir",
          "Nouveau projet d'idée",
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
      <Branches
        secTitle="Nos magasins"
        countryNames={[
          "Suisse",
          "Égypte",
          "Émirats arabes unis",
          "Arabie Saoudite",
          "États-Unis",
          "Canada",
          "Brésil",
        ]}
        address={[
          "Tiba swiss GmBH Poststrasse17, 2504 Bienne. Suisse",
          "Tiba swiss GmBH Egypte, Sharkia, Kafr Saqr, quartier Al-Nasr",
          "Tiba swiss GmBH, Dubai Business Bay, Park Line Toweroffice 2108 Dubai.",
          "Arabie Saoudite, Riad City",
        ]}
        message="À venir"
      />
      <Footer
        secTitle="Contactez-nous"
        title1="Entrez en contact"
        title2="Envoyez-nous un message"
        description="Restez toujours en contact avec nous par e-mail ou WhatsApp et nous
                 vous répondrons dans les plus brefs délais."
        building="Nom de l'entreprise"
        buildingDesc="TIBA SWISS GMBH"
        location="Emplacement"
        locationDesc="Poststrasse 17 2504 Biel/Bienne , Suisse"
        placeholder1="Nom"
        placeholder2="Sujet"
        placeholder3="Message"
        submit="Envoyer un message"
      />
    </>
  );
};

export default FrancePage;
