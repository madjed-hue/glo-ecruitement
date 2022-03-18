import { Grid, Typography } from "@mui/material";
import React from "react";
import "./About.css";
import RecruitementImg from "../../images/recruitement.jpg";
import Plan from "../../images/strategic.png";
import Process from "../../images/process.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="aboutContent">
          <div className="aboutHeading">
            <Typography variant="h5">WHO WE ARE</Typography>
            <Typography variant="h1">
              Why choose Glo Recruitment <br />
              <span>Services Company</span>
            </Typography>
          </div>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="imgContainer">
                <img src={RecruitementImg} alt="recruitement" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="intro">
                <p>
                  As Glo Recruitment, we are recognized countrywide and are
                  associated with competitive rates, great expertise in our
                  field, and an unshakeable commitment to providing the best
                  possible service to our clients and candidates.
                </p>
              </div>
              <div className="plan">
                <div className="planImg">
                  <img src={Plan} alt="plan svg" />
                </div>
                <div className="paragraph">
                  <Typography variant="h4">Our Plan</Typography>
                  <p>
                    prearranged strategy for hiring employees. It acts as a
                    timeline for companies to find qualified applicants without
                    causing downtime for the company.
                  </p>
                </div>
              </div>
              <div className="plan">
                <div className="planImg">
                  <img src={Process} alt="process svg" />
                </div>
                <div className="paragraph">
                  <Typography variant="h4">Our Strategy</Typography>
                  <p>
                    finding top quality talent with our recruitment strategies
                    to help improve your recruitment process in no time. If you
                    are looking for talented candidate, we are the best choice
                    for your need
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
