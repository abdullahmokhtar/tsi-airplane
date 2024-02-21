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
        secTitle="Données techniques"
        tableData={[
          [
            "Non.",
            "Descriptions des fonctions",
            "Détails de la marque",
            "Remarques",
          ],
          [
            "L'équipement de nettoyage des avions utilise principalement des canons à eau haute pression longue distance et des systèmes d'eau haute pression courte distance",
            "Pompe à eau haute pression. La partie rotor de la pompe est soutenue de manière constante par des roulements aux deux extrémités",
            "Allemagne pinfl",
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
