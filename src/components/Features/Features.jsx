import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Features.css";

const Feature = (props) => {

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="features" data-aos="fade-up">
            <div className="features__text__container">
                <h1 className="features__text">{props.title}<br/>{props.title2}</h1>
                <p>{props.text}</p>
            </div>
            <div className="features__image__container">
                <img src={props.image} alt={props.name} className="features__image"/>
            </div>
        </div>
    );
}

export default Feature;