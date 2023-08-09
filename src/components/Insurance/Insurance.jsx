import React, { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Insurance.css";

const Insurance = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="insurance">
      <div className="insurance__title">
        <div className="insurance__title__1">
          <span className="word">
            <span data-aos="fade-up">I</span>
            <span data-aos="slide-up">n</span>
            <span data-aos="fade-up">s</span>
            <span data-aos="fade-up">u</span>
            <span data-aos="fade-up">r</span>
            <span data-aos="fade-up">a</span>
            <span data-aos="fade-up">n</span>
            <span data-aos="fade-up">c</span>
            <span data-aos="fade-up">e</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">c</span>
            <span data-aos="slide-up">o</span>
            <span data-aos="fade-up">v</span>
            <span data-aos="fade-up">e</span>
            <span data-aos="fade-up">r</span>
            <span data-aos="fade-up">a</span>
            <span data-aos="fade-up">g</span>
            <span data-aos="fade-up">e</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">f</span>
            <span data-aos="slide-up">r</span>
            <span data-aos="fade-up">o</span>
            <span data-aos="fade-up">m</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">N</span>
            <span data-aos="slide-up">e</span>
            <span data-aos="fade-up">x</span>
            <span data-aos="fade-up">u</span>
            <span data-aos="fade-up">s</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">M</span>
            <span data-aos="slide-up">u</span>
            <span data-aos="fade-up">t</span>
            <span data-aos="fade-up">u</span>
            <span data-aos="fade-up">a</span>
            <span data-aos="fade-up">l</span>
            <span data-aos="fade-up">,</span>
          </span>
        </div>
        <div className="insurance__title__2">
          <span className="word">
            <span data-aos="ease-out">t</span>
            <span data-aos="slide-up">h</span>
            <span data-aos="fade-up">e</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">w</span>
            <span data-aos="slide-up">o</span>
            <span data-aos="fade-up">r</span>
            <span data-aos="fade-up">l</span>
            <span data-aos="fade-up">d</span>
            <span data-aos="fade-up">'</span>
            <span data-aos="fade-up">s</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">l</span>
            <span data-aos="slide-up">e</span>
            <span data-aos="fade-up">a</span>
            <span data-aos="fade-up">d</span>
            <span data-aos="fade-up">i</span>
            <span data-aos="fade-up">n</span>
            <span data-aos="fade-up">g</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">D</span>
            <span data-aos="slide-up">e</span>
            <span data-aos="fade-up">F</span>
            <span data-aos="fade-up">i</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">c</span>
            <span data-aos="slide-up">o</span>
            <span data-aos="fade-up">v</span>
            <span data-aos="fade-up">e</span>
            <span data-aos="fade-up">r</span>
            <span data-aos="fade-up">a</span>
            <span data-aos="fade-up">g</span>
            <span data-aos="fade-up">e</span>
          </span>
          <span className="word">
            <span data-aos="ease-out">p</span>
            <span data-aos="slide-up">r</span>
            <span data-aos="fade-up">o</span>
            <span data-aos="fade-up">v</span>
            <span data-aos="fade-up">i</span>
            <span data-aos="fade-up">d</span>
            <span data-aos="fade-up">e</span>
            <span data-aos="fade-up">r</span>
          </span>
        </div>
      </div>
      <div className="insurance__content" data-aos="fade-up">
        <div className="insurance__list">
          <h3>Protocol cover protects against</h3>
          <ul className="insurance__list__content">
            <li>
              <span className="list__style">01 </span>Code being used in an
              unintended way (e.g., exploits, hacks)
            </li>
            <hr className="line" />
            <li>
              <span className="list__style">02 </span>Economic design failure
            </li>
            <hr className="line" />
            <li>
              <span className="list__style">03 </span>Severe oracle failure
            </li>
            <hr className="line" />
            <li>
              <span className="list__style">04 </span>Governance attacks
            </li>
            <hr className="line" />
          </ul>
        </div>
        <div className="cc">
          <div className="cc__content">
            <h4>Current coverage</h4>
            <h1>236 ETH / 389.1k DAI</h1>
          </div>
          <div className="cc__learnmore">
            <a
              href="https://app.nexusmutual.io/cover/buy/get-quote?productId=96"
              target="_blank"
            >
              <button className="cc__bttn">Learn more</button>
            </a>
            <FiArrowUpRight className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
