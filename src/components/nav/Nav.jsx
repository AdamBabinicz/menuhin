import React, { useState } from "react";
import "./Nav.css";
import { GrContact } from "react-icons/gr";
import {
  GiViolin,
  GiCharacter,
  GiFamilyHouse,
  GiMusicalScore,
} from "react-icons/gi";
import { RiDiscFill } from "react-icons/ri";
import { IoMdMedal } from "react-icons/io";
import { MdContactMail } from "react-icons/md";

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
        <IoMdMedal />
      </a>
      <a
        href="#dyskografia"
        onClick={() => setActiveNav("#dyskografia")}
        className={activeNav === "#dyskografia" ? "active" : ""}
      >
        <RiDiscFill />
      </a>
      <a
        href="#kontakt"
        onClick={() => setActiveNav("#kontakt")}
        className={activeNav === "#kontakt" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
};

export default Nav;
