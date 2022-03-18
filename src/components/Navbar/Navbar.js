import React, { useEffect, useState } from "react";
import ContactNav from "./ContactNav";
import "./Navbar.css";
import Logo from "../../images/logo3.png";
// import LogoOne from "../../images/Main-Logo.jpg";
import ForumIcon from "@mui/icons-material/Forum";
import { Typography } from "@mui/material";
import BurgerMenu from "./BurgerMenu";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2, duration: 0.2 } },
};

const Navbar = () => {
  const [show, handlShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleClick = () => {
    setIsOpen(!isOpen);
  };
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handlShow(true);
    } else {
      handlShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className="navbar">
      <div className="header__overlay">
        <div className="container">
          <div className="topNav">
            <ContactNav />
          </div>
          <div className={`bottomNav ${show && "nav__black"}`}>
            <motion.div
              className="logoContainer"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={Logo} alt="logo" className="logo" />
            </motion.div>

            <div className="links">
              <ul>
                <li>
                  <Typography variant="span">
                    <a href="/#">Home</a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="span">
                    <a href="/#">Why Glo Recruitment</a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="span">
                    <a href="/#">For Job Hunters</a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="span">
                    <a href="/#">Employer Zone</a>
                  </Typography>
                </li>
                <li>
                  <Typography variant="span">
                    <a href="/#">Contact Us</a>
                  </Typography>
                </li>
              </ul>
            </div>
            <a href="/#">
              <div className="question">
                <div className="icon">
                  <ForumIcon sx={{ fontSize: 50 }} />
                </div>
                <div className="numbers">
                  <Typography variant="span">Have any Questions?</Typography>
                  <Typography variant="span">office (031) 828 2233</Typography>
                </div>
              </div>
            </a>
            <div className="burgerMenu" onClick={() => toggleClick()}>
              <BurgerMenu isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
