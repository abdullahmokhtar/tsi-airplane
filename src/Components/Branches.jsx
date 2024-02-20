import React from "react";
import BranchItem from "./BranchItem";
import switzerland from "../assets/imgs/Switzerland.png";
import Egypt from "../assets/imgs/Egypt.png";
import UAE from "../assets/imgs/United_Arab_Emirates.png";
import KSA from "../assets/imgs/KSA.png";
import USA from "../assets/imgs/Usa.png";
import Canada from "../assets/imgs/Canada.jpg";
import Brazil from "../assets/imgs/Brazil.png";

const Branches = ({ secTitle, countryNames, address, message }) => {
  return (
    <section id="branches" className="my-4">
      <div className="container">
        <h2 className="sec-title">{secTitle}</h2>
        <div className="row gy-2 my-2">
          <BranchItem
            img={switzerland}
            countryName={countryNames[0]}
            address={address[0]}
            addressLink="https://www.google.com/maps/search/Poststrasse+17A+2504+Biel+%D8%B3%D9%88%D9%8A%D8%B3%D8%B1%D8%A7%E2%80%AD/@47.146359,7.272272,15z?hl=ar&entry=ttu"
            phone1="0041 32 554 60 95"
            phone2="0041 76 343 59 38"
          />
          <BranchItem
            img={Egypt}
            countryName={countryNames[1]}
            address={address[1]}
            phone1="+201017962909"
            phone2="+201067656918"
          />
          <BranchItem
            img={UAE}
            countryName={countryNames[2]}
            address={address[2]}
            addressLink="https://www.google.com/maps/@25.18534,55.261837,12z?hl=en&entry=ttu"
            phone1="+0041 32 554 60 95"
            phone2="+0041 76 343 59 38"
          />
          <BranchItem
            img={KSA}
            countryName={countryNames[3]}
            address={address[3]}
            phone1="+966 54 466 6674"
          />
          <BranchItem
            img={USA}
            countryName={countryNames[4]}
            commingSoon={message}
          />
          <BranchItem
            img={Canada}
            countryName={countryNames[5]}
            commingSoon={message}
          />
          <div className="d-flex flex-column align-items-center">
            <BranchItem
              img={Brazil}
              countryName={countryNames[6]}
              commingSoon={message}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
