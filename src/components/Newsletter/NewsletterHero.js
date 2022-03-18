import React from "react";
// import NewsletterHero from "../../images/newsletterHero.jpg";
import { Typography } from "@mui/material";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

const NewsHero = () => {
  return (
    <div className="newsletterHero">
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="heroButton">
          <a href="/#">
            <div className="iconContainer">
              <div>
                <PlayCircleFilledOutlinedIcon />
              </div>
            </div>
          </a>
        </div>
        <div className="heroTitle">
          <Typography variant="h2">
            With our specialists, and experts at <br /> your disposal, you will
            face complex.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
