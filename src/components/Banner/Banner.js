import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Banner.css";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import TimeWeather from "../TimeAndWeathe/TimeWeather";
import { motion } from "framer-motion";

const buttonVaraints = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: "0", opacity: 1, transition: { duration: 1, delay: 1 } },
  whileHover: { scale: 1.09 },
};
const workVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3, delay: 0.2 } },
};

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="content">
          <div className="topContent">
            <Navbar />
          </div>
        </div>
      </div>
      <Box className="bottomContent">
        <Grid container spacing={2} className="bottomContent__container">
          <Grid item xs={12} lg={8} className="div">
            <Box className="left__banner">
              <Typography variant="h1">Glo Recruitment</Typography>
              <Typography variant="h4">
                Specialized IT Recruitment for the true Professional.
              </Typography>
              <div className="buttons">
                <motion.button
                  variant="span"
                  className="contact-us"
                  variants={buttonVaraints}
                  initial="hidden"
                  animate="visible"
                  whileHover="whileHover"
                >
                  Contact Us
                </motion.button>
                <motion.div
                  className="play"
                  variants={workVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <PlayCircleFilledWhiteOutlinedIcon />
                  <Typography variant="span">How We Work</Typography>
                </motion.div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} className="div">
            <TimeWeather />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Banner;
