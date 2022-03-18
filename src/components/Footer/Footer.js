import React from "react";
import "./Footer.css";
import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="container">
          <div className="footerContainer">
            <LeftFooter />
            <MiddleFooter />
            <RightFooter />
          </div>
          <div className="footerBottom">
            <div>
              <p>Copyright Glo Recruitment © 2022. All Rights Reserved.</p>
            </div>
            <div>
              <button onClick={() => scrollTop()}>
                <ArrowUpwardIcon />
              </button>
            </div>
            <div>
              <a href="/#">Privacy & Policy</a>
              <a href="/#">Conditions</a>
              <a href="/#">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
