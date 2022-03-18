import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

const Features = () => {
  return (
    <div className="features">
      <div className="overlay"></div>
      <div className="container">
        <div className="featuresContent">
          <FeatureCard />
        </div>
        <div className="featurQuote">
          <div className="qoute">
            <FormatQuoteOutlinedIcon />
            <div className="qoute_content">
              <p>
                Find out what you like doing best and get someone to pay you for
                doing it
              </p>
              <span>Katherine Whitehorn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
