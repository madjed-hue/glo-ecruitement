import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Servesis.css";
import Permanent from "../../images/permanent.jpg";
import Contract from "../../images/contract.jpg";
import { Box } from "@mui/system";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const Servesis = () => {
  return (
    <div className="servesis">
      <div className="servesisContainer">
        <div className="container">
          <div className="content">
            <div className="serviceTop">
              <div className="serviceTopLef">
                <Typography variant="h5">OUR SERVICES</Typography>
                <Typography variant="h2">
                  Deliver Outsourced <span>Recruitement service's</span>
                </Typography>
                <a href="/#">VIEW ALL SERVICES {"ــــ>"}</a>
              </div>
              <div className="serviceTopRight">
                <p>
                  Our specialist team utilizes two distinct and tailored
                  recruitment methodologies for permanent and contract
                  assignments.
                </p>
              </div>
            </div>
            <div className="serviceBottom">
              <Grid container spacing={2}>
                <Grid xs={12} sm={12} md={6}>
                  <Box className="serviceCard">
                    <img src={Contract} alt="contract" />
                    <div className="deal">
                      <a href="/#">Contract</a>
                      <p>
                        For contract assignments we are able to source for all
                        IT specific project requirements.
                      </p>

                      <ArrowRightAltOutlinedIcon />
                    </div>
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                  <Box className="serviceCard">
                    <img src={Permanent} alt="permanent" />
                    <div className="deal">
                      <a href="/#">Permanent</a>
                      <p>
                        For permanent we work mid-senior level positions,
                        typically with individuals having over 2 years
                        commercial experience.
                      </p>
                      <ArrowRightAltOutlinedIcon />
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servesis;
