import React from "react";
import SendIcon from "@mui/icons-material/Send";
import fbIcon from "../../images/fb.png";
import instIcon from "../../images/insta.png";
import linkIcon from "../../images/linkdin.png";
import twittIcon from "../../images/twitter.png";

const RightFooter = () => {
  return (
    <div className="rightFooter">
      <div className="topContent">
        <div className="heading">
          <h2>NEWSLETTER</h2>
        </div>
        <div className="rightContent">
          <div className="textContent">
            <p>Sign up today for hints, tips and the latest product news</p>
          </div>
          <div className="rightForm">
            <form action="">
              <input type="email" placeholder="Your Address Email" />
              <button type="submit">
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottomContent">
        <div className="heading">
          <h2>Follow Us</h2>
        </div>
        <div className="socialIconsFooter">
          <img src={fbIcon} alt="facebook-icon" />
          <img src={instIcon} alt="instagram-icon" />
          <img src={linkIcon} alt="linkedin-icon" />
          <img src={twittIcon} alt="twitter-icon" />
        </div>
      </div>
    </div>
  );
};

export default RightFooter;
