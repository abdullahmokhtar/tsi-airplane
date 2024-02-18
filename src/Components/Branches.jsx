import React, { useRef } from "react";
import BranchItem from "./BranchItem";
import switzerland from "../assets/imgs/Switzerland.png";
import Egypt from "../assets/imgs/Egypt.png";
import UAE from "../assets/imgs/United_Arab_Emirates.png";
import KSA from "../assets/imgs/KSA.png";
import USA from "../assets/imgs/Usa.png";
import Canada from "../assets/imgs/Canada.jpg";
import Brazil from "../assets/imgs/Brazil.png";

const Branches = ({secTitle}) => {
  const ref = useRef("branches");
  return (
    <section id="branches" ref={ref} class="my-4">
      <div class="container">
        <h2 class="sec-title">{secTitle}</h2>
        <div class="row gy-2 my-2">
          <BranchItem
            img={switzerland}
            countryName="Switzerland"
            address="Tiba swiss GmBH Poststrasse17, 2504 Biel. Switzerland"
            addressLink="https://www.google.com/maps/search/Poststrasse+17A+2504+Biel+%D8%B3%D9%88%D9%8A%D8%B3%D8%B1%D8%A7%E2%80%AD/@47.146359,7.272272,15z?hl=ar&entry=ttu"
            phone1="0041 32 554 60 95"
            phone2="0041 76 343 59 38"
          />
          <BranchItem
            img={Egypt}
            countryName="Egypt"
            address="Tiba swiss GmBH Egypt, Sharkia, Kafr Saqr, Al-Nasr neighborhood"
            phone1="+201017962909"
            phone2="+201067656918"
          />
          <BranchItem
            img={UAE}
            countryName="UAE"
            address="Tiba swiss GmBH, Dubai business bay, park Line toweroffice 2108 Dubai."
            addressLink="https://www.google.com/maps/@25.18534,55.261837,12z?hl=en&entry=ttu"
            phone1="+0041 32 554 60 95"
            phone2="+0041 76 343 59 38"
          />
          <BranchItem
            img={KSA}
            countryName="KSA"
            address="Saudi Arabia, Riad City"
            phone1="+966 54 466 6674"
          />
          <BranchItem img={USA} countryName="USA" />
          <BranchItem img={Canada} countryName="Canada" />
          <div class="d-flex flex-column align-items-center">
            <BranchItem img={Brazil} countryName="Brazil" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
