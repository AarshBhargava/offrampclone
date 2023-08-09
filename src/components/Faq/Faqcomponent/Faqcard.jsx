import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {AiOutlinePlus} from "react-icons/ai";
import "./Faqcard.css";

const Faqcard = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
    const [toggle, settoggle] = useState(true);
  return (
    <div className="faqcard">
      <div onClick={() => {
        settoggle(!toggle)
      }} className="question">
        <p>{props.question}</p>
        <AiOutlinePlus className="plus__icon"/>
      </div>
      <div data- className={toggle ? "close" : "open"}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Faqcard;
