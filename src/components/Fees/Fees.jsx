import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Fees.css";

const Fees = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="fees">
      <div className="fees__panel__1" data-aos="zoom-in">
        <div className="fees__panel__1__text">
          <h1>
            Transaction fees <br /> 10x lower
          </h1>
          <p>than the industry average</p>
        </div>
        <div>
          <h1>0.35%</h1>
          <p>for on/offramping</p>
        </div>
      </div>
      <div className="fees__panel__2" data-aos="zoom-in">
        <h1>
          Stay fully self-custodial <br /> with your wallet and <br />
          funds.
        </h1>
      </div>
    </div>
  );
};

export default Fees;
