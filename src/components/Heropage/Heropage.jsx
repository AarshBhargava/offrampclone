import React from "react";
import "./Heropage.css";

const Heropage = () => {
    return(
        <div className="heropage">
            <img src="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/644b2cf6a43c9cbcf0309a1a_hero.svg" alt="heropagepicture" className="heropage__picture"/>
            <div className="heropage__content">
                <img src="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/6451c17d4c1e8e1f6ff0238a_chainlink.svg" alt="" className="heropage__content__logo"/>
                <h1 className="heropage__bigtext">Decentralized P2P<br/>exchange</h1>
                <h3 className="heropage__smalltext">Fast, trustless, self-custodial trades with ridiculously low fees.</h3>
            </div>
            <a href="https://staging.offramp.xyz/" target="_blank" className="heropage__bttn">
              Launch app
            </a>
        </div>
    );
}

export default Heropage;