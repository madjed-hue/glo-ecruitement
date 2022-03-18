import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import "./Ripon.css";

const Ripon = () => {
  return (
    <div className="ripon">
      <div className="content">
        <div className="container">
          <div className="riponWrapper">
            <div className="riponLeft">
              <div className="svgContainer">
                <DateRangeIcon />
              </div>
              <div className="textContent">
                <h1>
                  Call our office to get more details, or Email us here with
                  your CV.
                </h1>
              </div>
            </div>
            <div className="riponRight">
              <a href="mailto:cv@glo-recruitment.co.za">Send an Email or CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ripon;
