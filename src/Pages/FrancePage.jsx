import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";

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
