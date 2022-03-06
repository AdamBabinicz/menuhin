import React from "react";
import CTA from "./CTA";
import "./Header.css";
import img from "../../assets/2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h5>amerykański wirtuoz skrzypiec oraz dyrygent</h5>
        <h1>
          <span>lord</span> Jehudi Menuhin
        </h1>
        <h5 className="text-light">(1916 - 1999)</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={img} alt="..." />
        </div>
        <a href="#kontakt" className="scroll__down">
          Przewiń
        </a>
      </div>
    </header>
  );
};

export default Header;
