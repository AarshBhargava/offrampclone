import React from "react";
import Feature from "../Features/Features";
import "./Merchant.css";

const Merchant = () => {
  return (
    <section className="merchant__container">
      <div className="merchant">
        <Feature
          title="Become a P2P Merchant on"
          title2="Offramp.xyz"
          text="Turbocharge your revenue as a P2P merchant with our simple onboarding process, and automated transaction reconciliation. Earn on arbitrage spreads and commissions!"
          image="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/647487d76fc6bf5f6f8e6c98_Mask%20group.png"
        />
      </div>
    </section>
  );
};

export default Merchant;
