import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import firstFeature from "../../images/f1.png";
import secondFeature from "../../images/f2.png";
import thirdFeature from "../../images/f3.png";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const FeatureCard = () => {
  const allFeatures = [
    {
      featureImage: firstFeature,
      heading: "Compensation Consulting",
      description: "We provide broad menu employment services for a companies.",
    },
    {
      featureImage: secondFeature,
      heading: "Leadership Training",
      description: "We provide broad menu employment services for a companies.",
    },
    {
      featureImage: thirdFeature,
      heading: "Talent Acquisition",
      description: "We provide broad menu employment services for a companies.",
    },
  ];
  return (
    <div className="cardFeature">
      {allFeatures.map((feature) => {
        return (
          <div className="card" key={feature.heading}>
            <div className="cardContent">
              <div className="cardImg">
                <img src={feature.featureImage} alt="feature one" />
              </div>
              <div className="cardHeading">
                <Typography variant="h4"> {feature.heading} </Typography>
              </div>
              <div className="cardDesc">
                <p>{feature.description}</p>
              </div>
            </div>
            <motion.button>
              <ArrowRightAltOutlinedIcon />
            </motion.button>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;
