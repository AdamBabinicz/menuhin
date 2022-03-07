import React from "react";
import "./Services.css";
import { RiDiscFill } from "react-icons/ri";

const Services = () => {
  return (
    <section id="dyskografia">
      <h5>Twórczość</h5>
      <h2>Dyskografia</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Wykonania / płyty</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>1966: West Meets East</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>1968: West Meets East, Volume 2</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>1988: Menuhin And Grappelli Play Gershwin</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>
                1988: Menuhin & Grappelli Play Berlin, Kern, Porter & Rodgers &
                Hart
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI */}
        <article className="service">
          <div className="service__head">
            <h3>Wykonania / płyty</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>
                1988: Menuhin And Grappelli Play "Jalousie" And Other Great
                Standards
              </p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>1988: The Very Best of Grappelli & Menuhin</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>1988: Menuhin & Grappelli Play Gershwin</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>1990: Jealousy: Hits Of The Thirties</p>
            </li>
          </ul>
        </article>
        {/* END OF UI */}
        <article className="service">
          <div className="service__head">
            <h3>Wykonania / płyty</h3>
          </div>
          <ul className="service__list">
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>1991: Concert of the Century</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>2009: The Great EMI Recordings Yehudi Menuhin</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>2009: 100 Best Menuhin</p>
            </li>
            <li>
              <RiDiscFill className="service__list-icon" />
              <p>2012: Bach: Works With Orchestra</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
