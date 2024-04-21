import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";
import Benfits from "../Components/Benfits";
import TechData from "../Components/TechData";
import Partners from "../Components/Partners";

const EnglishPage = () => {
  return (
    <>
      <Header
        home="Home"
        contact="About Us"
        branches="Our Branches"
        partners="partners"
      />
      <Slider
        text1="Tiba Swiss International"
        text2="Aircraft Wash Equipment"
        text3="Airplane Wash Equipment"
      />
      <Benfits
        secTitle="Features & Benefits"
        benfitsList={[
          "More clean for the Aircraft",
          "Save times and Power only 30 min",
          "Aircraft rust prevention",
          "Friendly and maintain proof",
          "Easy to use, operate and maintain",
          "New Idea Project",
        ]}
      />
      <TechData
        secTitle="Technical Data"
        tableHead={["No.", "Function Descriptions", "Brand Details", "Remarks"]}
        tableData={[
          [
            "The aircraft cleaning equipment mainly uses long-distance high pressure water cannons and short distance high-pressure water systems",
            " High -pressure water pump The rotor part of the pump is supported consistently by Rolling bearing at both ends",
            "Germany pinfl",
          ],
          [
            "To wash the entire surface of large and medium-sized aircraft (including fuselage, aircraft wings, and aircraft tail oil stains)",
            "the pump runs smoothly",
            "Japan NSK",
          ],
          [
            "To remove oil stains and dust",
            "This 5-outlets-pump is single stage Vertical pump,",
          ],
          [
            "Red and ultraviolet detection function, automatic tracking and positioning, 24 hours automatic detection",
            "The inlet of the pump is in the horizontal direction, and the outlet is arranged vertically upwards simplify the pipeline",
            "Germany FUCHS",
          ],
          [
            "Sensing aircraft enters, the water cannon system automatically turn on,Scan from",
            "The motor of the pump is horizontal structure, easy maintenance",
          ],
          [
            "Horizontal, vertical, tilted orientation Directions.",
            "There are 50, 75, 100, 125, 150 and other calibers to meet the needs of",
            "France schneider",
          ],
          [
            "The central controller issues instructions,Then pumps started ,valve opened",
            "different flow rates and lifts",
          ],
          [
            "The high pressure water cannon ejaculates the target aircraft",
            "After cleaning completed, the central controller will send instructions to stop ejatulating.",
            "Taiwan Delta",
          ],
          [
            "A.Aircraft enters cleaning area B.Device self-sense to start A.Mix the cleaning detergent B.Spray the cleaning detergent",
            "A.High -pressure water cannon Cleaning B.High -pressure water Cleaning",
            "Cleaning Procedures",
          ],
          [
            "Sensing aircraft enters, the water cannon system automatically turn on,Scan from",
            "Drive away from the cleaning area, the cleaning is over",
          ],
        ]}
      />
      {/* <Price price="Price" /> */}
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
          "Tiba swiss GmBH, Dubai business bay, park Line tower office 2108 Dubai.",
          " Saudi Arabia, Riad City",
        ]}
        message="Coming soon"
      />
      <Partners secTitle="Our Partners" />
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
