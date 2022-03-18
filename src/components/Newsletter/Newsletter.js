import React from "react";
import NewsHero from "./NewsletterHero";
import "./Newsletter.css";
import Subscribe from "./Subscribe";
import Skills from "./Skills";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="content">
        <div className="heroSection">
          <NewsHero />
        </div>
        <div className="container">
          <div className="bottomContentContainer">
            <Subscribe />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
