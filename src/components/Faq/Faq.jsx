import React from "react";
import Faqcard from "./Faqcomponent/Faqcard";
import "./Faq.css";

const Faq = () => {
  return (
    <section className="faq">
      <div className="faq__content">
        <h1 className="faq__title">Frequently Asked Question</h1>
        <div className="faq__question">
          <Faqcard
            question="Do I need a Wise (TransferWise) account?"
            text="Yes, but we’ll be expanding support for Revolut, SEPA transfers and more, soon!"
          />
          <Faqcard question="Why do I need to provide my read-only API key?" text="We use Chainlink oracles to read and verify fiat transactions from buyers through API calls to Wise. Once verified, crypto is released from an escrow smart contract to the seller."/>
          <Faqcard question="What chains do you support?" text="Polygon mainnet for now with, Arbitrum, Optimism and others coming soon. Ping us on Discord if you’d like to see support for a specific chain!"/>
          <Faqcard question="What fiat currencies can I trade in?" text="All trades are settled in USD and EUR, but if you’re using Wise, you can fund any transaction with other currencies like SGD, KRW, JPY, INR, BRL, CAD, & more!"/>
          <Faqcard question="Where can I learn more about the protocol?" text= "For a more detailed understanding of the protocol, read our whitepaper. You can also ping us on our Discord or DM us on Twitter!"/>
          <Faqcard question="When are you launching a token?" text="We have no plans to launch a token yet. Stay updated through our socials though!"/>
        </div>
      </div>
    </section>
  );
};

export default Faq;
