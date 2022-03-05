import React from "react";
import { FaPinterestSquare } from "react-icons/fa";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
        <AiFillFacebook />
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
        <FaPinterestSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
