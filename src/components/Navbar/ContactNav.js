import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";

const ContactNav = () => {
  return (
    <div className="contactNav">
      <div className="content">
        <div className="leftSide">
          <ul>
            <li>
              <MailOutlineIcon />{" "}
              <Typography variant="span">
                durban@glo-recruitment.co.za
              </Typography>
            </li>
            <li>
              <PersonOutlineIcon />{" "}
              <Typography variant="span">
                Office Address : 12 India, Newdelhey, India
              </Typography>
            </li>
          </ul>
        </div>
        <div className="rightSide">
          <div className="socialIcons">
            <ul className="social-ul">
              <li>
                <a href="/">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="/">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="search">
            <a href="/">
              <SearchIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
