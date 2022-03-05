import React from "react";
import "./Footer.css";
import { HiOutlineMusicNote } from "react-icons/hi";
import { FaPinterestP, FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <HiOutlineMusicNote />
      </a>
      <ul className="permalinks">
        <li>
          <a href="#" className="">
            Start
          </a>
        </li>
        <li>
          <a href="#życiorys" className="">
            Życiorys
          </a>
        </li>
        <li>
          <a href="#zasługi" className="">
            Zasługi
          </a>
        </li>
        <li>
          <a href="#dyskografia" className="">
            Dyskografia
          </a>
        </li>
        <li>
          <a href="#koncerty" className="">
            Koncerty
          </a>
        </li>
        <li>
          <a href="#rodzina" className="">
            Rodzina
          </a>
        </li>
        <li>
          <a href="#kontakt" className="">
            Kontakt
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.youtube.com/watch?v=3sfnpUbEtUE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube />
        </a>
        <a
          href="https://pl-pl.facebook.com/yehudimenuhin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/iymf_menuhin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter />
        </a>
        <a
          href="https://pl.pinterest.com/pin/101119954103444846"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP />
        </a>
      </div>
      <div className="footer__copyright">
        <small>Radom, 2022 - {new Date().getFullYear()}.</small>
      </div>
    </footer>
  );
};

export default Footer;
