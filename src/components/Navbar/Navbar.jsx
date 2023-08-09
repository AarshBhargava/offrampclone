import React from "react";
import image from "../../assets/vecteezy_a-logo-illustration-depicting-web3-metaverse_13863816.jpg";
import "./Navbar.css";

const Navbar = () => {
  const handlescrolltoFaq = () => {
    const faqsection = document.getElementsByClassName("faq")[0];
    faqsection.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <header className="navbar">
      <div className="logo__container">
        <img src={image} alt="logo" className="logo"/>
        <p className="logo__name">Aarsh's offramp</p>
      </div>
      <nav>
        <ul className="navlist__container">
          <li onClick={handlescrolltoFaq}>FAQ</li>
          <li><a href="https://aarshbhargava.github.io/Techshinigami/" className="atag" target="_blank">Whitepaper</a></li>
          <li><a href="https://medium.com/@offrampxyz" className="atag" target="_blank">Blog</a></li>
          <li className="navlist__bttns">
            <a href="https://www.offramp.xyz/offramp-merchant" className="nav__bttn__1">
              Become a merchant
            </a>
            <a href="https://staging.offramp.xyz/" target="_blank" className="nav__bttn__2">
              Launch app
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
