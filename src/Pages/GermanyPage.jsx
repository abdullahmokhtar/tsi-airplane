import React from "react";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider";
import Branches from "../Components/Branches";
import Footer from "../Components/Footer";
import Benfits from "../Components/Benfits";
import TechData from "../Components/TechData";

const GermanyPage = () => {
  return (
    <>
      <Header home="Heim" contact="Über uns" branches="Unsere Filialen" />
      <Slider
        text1="Tiba Swiss International"
        text2="Flugzeugwaschanlagen"
        text3="Flugzeugwaschausrüstung"
      />
      <Benfits
        secTitle="Funktionen und Vorteile"
        benfitsList={[
          "Mehr Sauberkeit für das Flugzeug",
          "Sparen Sie Zeit und Strom nur 30 Minuten",
          "Flugzeug-Rostschutz",
          "Freundlich sein und den Beweis wahren",
          "Einfach zu bedienen, zu bedienen und zu warten",
          "Neues Ideenprojekt",
        ]}
      />
      <TechData
        secTitle="Technische Daten"
        tableHead={[
          "Nr.",
          "Funktionsbeschreibungen",
          "Markendetails",
          "Bemerkungen",
        ]}
        tableData={[
          [
            "Die Flugzeugreinigungsausrüstung verwendet hauptsächlich Langstrecken-Hochdruckwasserwerfer und Kurzstrecken-Hochdruckwassersysteme",
            "Hochdruck-Wasserpumpe. Der Rotorteil der Pumpe wird an beiden Enden durchgehend durch Wälzlager getragen",
            "Deutschland pinfl",
          ],
          [
            "Zum Waschen der gesamten Oberfläche großer und mittelgroßer Flugzeuge (einschließlich Rumpf, Flugzeugflügel und Ölflecken am Flugzeugheck)",
            "Die Pumpe läuft rund",
            "Japan NSK",
          ],
          [
            "Zum Entfernen von Ölflecken und Staub",
            "Diese 5-Ausgänge-Pumpe ist eine einstufige Vertikalpumpe",
          ],
          [
            "Rot- und Ultraviolett-Erkennungsfunktion, automatische Verfolgung und Positionierung, 24 Stunden automatische Erkennung",
            "Der Einlass der Pumpe liegt in horizontaler Richtung und der Auslass ist vertikal nach oben angeordnet, um die Rohrleitung zu vereinfachen",
            "Deutschland FUCHS",
          ],
          [
            "Wenn das Flugzeug eindringt, schaltet sich das Wasserwerfersystem automatisch ein, Scannen von",
            "Der Motor der Pumpe ist horizontal aufgebaut und wartungsfreundlich",
          ],
          [
            "Horizontale, vertikale, geneigte Ausrichtungsrichtungen.",
            "Es gibt 50, 75, 100, 125, 150 und andere Kaliber, um den Bedürfnissen gerecht zu werden",
            "Frankreich Schneider",
          ],
          [
            "Die zentrale Steuerung gibt Anweisungen, dann werden die Pumpen gestartet und das Ventil geöffnet",
            "unterschiedliche Fördermengen und Aufzüge",
          ],
          [
            "Der Hochdruck-Wasserwerfer schießt das Zielflugzeug ab",
            "Nachdem die Reinigung abgeschlossen ist, sendet die Zentralsteuerung Anweisungen zum Stoppen der Ejatulation.",
            "Taiwan-Delta",
          ],
          [
            "A.Flugzeug betritt den Reinigungsbereich. B.Geräte-Selbsterkennung zum Starten. A.Mischen Sie das Reinigungsmittel. B.Sprühen Sie das Reinigungsmittel",
            "A. Reinigung von Hochdruckwasserwerfern B. Reinigung von Hochdruckwasserwerfern",
            "Reinigungsverfahren",
          ],
          [
            "Wenn das Flugzeug eindringt, schaltet sich das Wasserwerfersystem automatisch ein, Scannen von",
            "Fahren Sie vom Reinigungsbereich weg, die Reinigung ist beendet",
          ],
        ]}
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
