import React from "react";
import "./Aproach.css";
import AppOne from "../../images/jigsaw.png";
import AppTwo from "../../images/handshake.png";
import AppThree from "../../images/recruitment.png";

const Aproach = () => {
  const options = [
    {
      id: 1,
      icon: AppOne,
      heading: "Collect Info",
      description:
        "You don't need to look through any of the CV, Our team handle that with professional treatment.",
    },
    {
      id: 2,
      icon: AppTwo,
      heading: "Meeting Call",
      description:
        "After collecting the right candidates, we make a quick meeting call to cellect more info about the candidate knowledge.",
    },
    {
      id: 3,
      icon: AppThree,
      heading: "Pick Up",
      description:
        "Pick up the right candidate for the chosen job offer, and hire them as fast as we need them.",
    },
  ];
  return (
    <div className="aproach">
      <div className="container">
        <div className="aprochContent">
          <div className="topSection">
            <h5>our approach</h5>
            <h1>
              We Choose a <span>Candidate</span>
            </h1>
            <p>
              We have your special skills are added to recruitment. We feel that
              these special skills are part of the success of the business
            </p>
          </div>
          <div className="bottomSection">
            {options.map((option) => {
              return (
                <div className="card" key={option.id}>
                  <div className="cardImg">
                    <img src={option.icon} alt={option.heading} />
                    <div className="num">
                      <span>{option.id}</span>
                    </div>
                  </div>
                  <div className="cartTitle">
                    <h3>{option.heading}</h3>
                  </div>
                  <div className="cardDesc">
                    <p>{option.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aproach;
