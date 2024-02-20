import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";

const GermanyPage = () => {
  return (
    <>
      <Header home="Heim" contact="Über uns" branches="Unsere Filialen" />
      <Slider
        text1="Tiba Swiss International"
        text2="Flugzeugwaschanlagen"
        text3="Flugzeugwaschausrüstung"
      />
      <Branches
        secTitle="Unsere Filialen"
        countryNames={[
          "Schweiz",
          "Ägypten",
          "UAE",
          "KSA",
          "USA",
          "Kanada",
          "Brasilien",
        ]}
        address={[
          "Tiba swiss GmBH Poststrasse17, 2504 Biel. Schweiz",
          "Tiba swiss GmBH Ägypten, Sharkia, Kafr Saqr, Al-Nasr-Viertel",
          "Tiba Swiss GmBH, Dubai Business Bay, Park Line Toweroffice 2108 Dubai.",
          "Saudi-Arabien, Riad-Stadt",
        ]}
        message="Demnächst"
      />
      <Footer
        secTitle="Kontaktiere uns"
        title1="Nehmen Sie Kontakt auf"
        title2="Schreiben Sie uns eine Nachricht"
        description="Bleiben Sie immer per E-Mail oder WhatsApp mit uns in Kontakt und wir
                 Ich werde Ihnen so schnell wie möglich antworten."
        building="Name des Unternehmens"
        buildingDesc="TIBA SWISS GMBH"
        location="Standort"
        locationDesc="Poststrasse 17 2504 Biel/Bienne, Schweiz"
        placeholder1="Name"
        placeholder2="Betreff"
        placeholder3="Nachricht"
        submit="Nachricht senden"
      />
    </>
  );
};

export default GermanyPage;
