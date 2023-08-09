import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import image from "../../assets/vecteezy_a-logo-illustration-depicting-web3-metaverse_13863816.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer__container">
      <div className="footer">
        <div className="footer__header">
          <ul className="footer__list">
            <li>FAQ</li>
            <li>Whitepaper</li>
            <li>Blog</li>
          </ul>
          <div className="social">
            <AiOutlineTwitter className="twitter" />
            <FaDiscord className="discord"/>
          </div>
        </div>
        <div className="footer__logo__container">
          <img src={image} alt="logo" className="footer__logo" />
          <p className="footer__logo__name">Aarsh's offramp</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
