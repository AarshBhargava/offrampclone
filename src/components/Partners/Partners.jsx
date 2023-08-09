import React from "react";
import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__content">
        <p>Our partners</p>
        <a href="https://chain.link/" target="_blank">
          <img
            src="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/647dea56c44c3fc748cb83e0_Chainlink%20Logo%20Blue%201.svg"
            alt="Chainlink"
            className="chainlink"
          />
        </a>
        <a href="https://meson.fi/" target="_blank" >
          <img
            src="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/647dea77554df71a26fb42b7_meson_h_black%201.svg"
            alt="meson"
            className="meson"
          />
        </a>
        <a href="https://polybase.xyz/" target="_blank" >
          <img
            src="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/647dea67b777092b85e38b1b_polybase%201.svg"
            alt="Polybase"
            className="polybase"
          />
        </a>
        <a
          href="https://app.nexusmutual.io/cover/buy/get-quote?productId=96"
          target="_blank"
        >
          <img
            src="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/64900cd8f8719a50eb45f4bb_Group%20321.svg"
            alt="Nexus Mutual"
            className="nexusmutual"
          />
        </a>
      </div>
    </section>
  );
};

export default Partners;
