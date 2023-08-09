import React from "react";
import Feature from "./Features";
import "./FeaturePanel.css";

const FeaturePanel = () => {
    return(
        <div className="featurepanel">
            <Feature title="Start P2P trading" title2="in seconds" text="Just connect an existing fiat and crypto wallet to begin. The perfect combination of convenience and self-custody." image="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/647489acbcac627c0188a663_p2p.png"/>
            <Feature title="Instant, trustless trades" text ="Trades are fully secured using smart contracts and Chainlink AnyAPI. Transactions are automatically verified and settled! No manual release of funds needed." image="https://uploads-ssl.webflow.com/638dce18f5ce022bbefdca6c/647489e171bd1ec3d659a1cf_Group%20304-p-800.png"/>
        </div>
    );
}

export default FeaturePanel;