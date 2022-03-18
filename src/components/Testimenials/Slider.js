import React from "react";
import imgOne from "../../images/p01.png";
import imgTow from "../../images/p02.png";
import imgThree from "../../images/p03.png";
import imgFour from "../../images/p04.jpg";
import imgFive from "../../images/05.jpg";
import imgSix from "../../images/06.jpg";
import imgSeven from "../../images/p07.jpg";
import imgEigth from "../../images/p08.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const cards = [
  {
    id: 1,
    icon: imgSix,
    heading: "Accuracy",
    subTitle: "In no Time",
  },
  {
    id: 2,
    icon: imgTow,
    heading: "Famous Agency",
    subTitle: "Recognized Countrywide",
  },
  {
    id: 3,
    icon: imgThree,
    heading: "Height Skills",
    subTitle: "Fully Integrated Service",
  },
  {
    id: 4,
    icon: imgFour,
    heading: "Lower Budget",
    subTitle: "Competitive Rates",
  },
  {
    id: 5,
    icon: imgFive,
    heading: "source for all IT",
    subTitle: "Project Requirements",
  },
  {
    id: 6,
    icon: imgEigth,
    heading: "permanent work",
    subTitle: "Mid-Senior Level Positions",
  },
  {
    id: 7,
    icon: imgOne,
    heading: "Contract Assignments",
    subTitle: "Mid-Senior Level Positions",
  },
  {
    id: 8,
    icon: imgSeven,
    heading: "Great Expertise",
    subTitle: "Unshakeable commitment for best services",
  },
];

const Slider = () => {
  return (
    <div className="slider">
      <div className="content">
        {/* <div className="container"> */}
        <div className="allCards">
          {cards.map((card) => {
            return (
              <div className="card-wrapper" key={card.id}>
                <div className="imgWrapper">
                  <img src={card.icon} alt={card.heading} />
                </div>
                <div className="card-content">
                  <h5>{card.heading}</h5>
                  <h3>{card.subTitle} </h3>
                </div>
                <div className="button">
                  <AddCircleIcon />
                </div>
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Slider;
