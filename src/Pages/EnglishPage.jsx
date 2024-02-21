import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";
import Benfits from "../Components/Benfits";
import TechData from "../Components/TechData";

const EnglishPage = () => {
  return (
    <>
      <Header home="Home" contact="About Us" branches="Our Branches" />
      <Slider
        text1="Tiba Swiss International"
        text2="Aircraft Wash Equipment"
        text3="Airplane Wash Equipment"
      />
      <Benfits
        secTitle="Features & Benfits"
        benfitsList={[
          "More clean for the Aircraft",
          "Save times and Power only 30 min",
          "Aircraft rust prevention",
          "Friendly and maintain proof",
          "Easy to use, operate and maintain",
          "New Idea Project",
        ]}
      />
      <TechData />
      <Branches
        secTitle="Our Branches"
        countryNames={[
          "Switzerland",
          "Egypt",
          "UAE",
          "KSA",
          "USA",
          "Canada",
          "Brazil",
        ]}
        address={[
          "Tiba swiss GmBH Poststrasse17, 2504 Biel. Switzerland",
          "Tiba swiss GmBH Egypt, Sharkia, Kafr Saqr, Al-Nasr neighborhood",
          "Tiba swiss GmBH, Dubai business bay, park Line toweroffice 2108 Dubai.",
          " Saudi Arabia, Riad City",
        ]}
        message="Comming soon"
      />
      <Footer
        secTitle="Contact us"
        title1="Get In Touch"
        title2="Message Us"
        description="Always keep in touch with us through e-mail or WhatsApp and we
                will respond to you as soon as possible."
        building="Name of Business"
        buildingDesc="TIBA SWISS GMBH"
        location="Location"
        locationDesc="Poststrasse 17 2504 Biel/Bienne , Switzerland"
        placeholder1="Name"
        placeholder2="Subject"
        placeholder3="Message"
        submit="Send Message"
      />
    </>
  );
};

export default EnglishPage;
