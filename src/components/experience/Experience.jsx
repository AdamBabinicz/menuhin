import React from "react";
import "./Experience.css";
import {
  GiMedal,
  GiMedalSkull,
  GiRibbonMedal,
  GiSportMedal,
  GiRosaShield,
  GiPeaceDove,
  GiTargetPrize,
} from "react-icons/gi";
import { BiMedal } from "react-icons/bi";
import { MdSchool } from "react-icons/md";
import { RiBookFill, RiMedal2Fill, RiMedalFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="zasługi">
      <h5>Nagrody i odznaczenia</h5>
      <h2>Uhonorowanie</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Tytuły</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiMedal className="experience__details-icon" />
              <div>
                <h4>Kawalera Komandora Orderu Imperium Brytyjskiego</h4>
                <small className="text-light">1965</small>
              </div>
            </article>
            <article className="experience__details">
              <GiMedalSkull className="experience__details-icon" />
              <div>
                <h4>Order Zasługi</h4>
                <small className="text-light">1987</small>
              </div>
            </article>
            <article className="experience__details">
              <BiMedal className="experience__details-icon" />
              <div>
                <h4>tytuł barona (para)</h4>
                <small className="text-light">1993</small>
              </div>
            </article>
            <article className="experience__details">
              <GiRibbonMedal className="experience__details-icon" />
              <div>
                <h4>Krzyż Komandorski Orderu Oranje-Nassau</h4>
                <small className="text-light">
                  odznaczenie Królestwa Niderlandów
                </small>
              </div>
            </article>
            <article className="experience__details">
              <GiSportMedal className="experience__details-icon" />
              <div>
                <h4>Order Legii Honorowej</h4>
                <small className="text-light">II, III, V klasy</small>
              </div>
            </article>
            <article className="experience__details">
              <RiMedalFill className="experience__details-icon" />
              <div>
                <h4>Krzyż Komandorski Orderu Sztuki i Literatury</h4>
                <small className="text-light">
                  cywilne odznaczenie francuskie
                </small>
              </div>
            </article>
            <article className="experience__details">
              <RiMedal2Fill className="experience__details-icon" />
              <div>
                <h4>Krzyż Wielkiego Komandora Orderu Feniksa</h4>
                <small className="text-light">
                  wysokie odznaczenie greckie
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Nagrody</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiPeaceDove className="experience__details-icon" />
              <div>
                <h4>Pokojowa Nagroda im. Nehru</h4>
                <small className="text-light">1968</small>
              </div>
            </article>
            <article className="experience__details">
              <GiTargetPrize className="experience__details-icon" />
              <div>
                <h4>Nagroda Fundacji Muzycznej Léonie Sonning</h4>
                <small className="text-light">1972</small>
              </div>
            </article>
            <article className="experience__details">
              <RiBookFill className="experience__details-icon" />
              <div>
                <h4>
                  nagroda na Międzynarodowych Targach Książki we Frankfurcie
                </h4>
                <small className="text-light">1972</small>
              </div>
            </article>
            <article className="experience__details">
              <MdSchool className="experience__details-icon" />
              <div>
                <h4>Doktor honoris causa 27 uczelni na całym świecie</h4>
                <small className="text-light">
                  Uniwersytetu Oksfordzkiego, Uniwersytetu Cambridge,
                  Uniwersytetu w Bath, Belgijskiego Uniwersytetu w Brukseli,
                  Narodowego Uniwersytetu w Córdobie, Narodowego Uniwersytetu
                  Muzycznego w Bukareszcie
                </small>
              </div>
            </article>
            <article className="experience__details">
              <GiRosaShield className="experience__details-icon" />
              <div>
                <h4>Honorowy Obywatel miast</h4>
                <small className="text-light">
                  Edynburga, Bath, Reims, Warszawy, Paryża i Jerozolimy
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
