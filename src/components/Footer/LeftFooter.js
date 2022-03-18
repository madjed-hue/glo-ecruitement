import React from "react";
import LogoFooter from "../../images/logo3.png";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

const LeftFooter = () => {
  return (
    <div className="leftFooter">
      <div className="logoFooter">
        <img src={LogoFooter} alt="logo glo recruitement" />
      </div>
      <div className="leftTextConatiner">
        <p>
          As Glo Recruitment, we are recognized countrywide and are associated
          with competitive rates, great expertise in our field and an
          unshakeable commitment to providing the best possible service to our
          clients and candidates.
        </p>
      </div>
      <div className="contactSupport">
        <div className="textSupport">
          <h2>
            Talk To Our Support <br /> office (031) 828 2233
          </h2>
        </div>
        <div className="supportIcon">
          <PermPhoneMsgIcon />
        </div>
      </div>
    </div>
  );
};

export default LeftFooter;
