import React, { useState } from "react";
import "./Nav.css";
import { GrContact } from "react-icons/gr";
import {
  GiViolin,
  GiCharacter,
  GiFamilyHouse,
  GiMusicalScore,
} from "react-icons/gi";
import { FaMenorah } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <GiFamilyHouse />
      </a>
      <a
        href="#życiorys"
        onClick={() => setActiveNav("#życiorys")}
        className={activeNav === "#życiorys" ? "active" : ""}
      >
        <GiCharacter />
      </a>
      <a
        href="#zasługi"
        onClick={() => setActiveNav("#zasługi")}
        className={activeNav === "#zasługi" ? "active" : ""}
      >
        <GiViolin />
      </a>
      <a
        href="#dyskografia"
        onClick={() => setActiveNav("#dyskografia")}
        className={activeNav === "#dyskografia" ? "active" : ""}
      >
        <FaMenorah />
      </a>
      <a
        href="#kontakt"
        onClick={() => setActiveNav("#kontakt")}
        className={activeNav === "#kontakt" ? "active" : ""}
      >
        <GiMusicalScore />
      </a>
    </nav>
  );
};

export default Nav;
