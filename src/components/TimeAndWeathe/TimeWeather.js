import React from "react";

import "./TimeWeather.css";
import Time from "./Time";
import { Grid } from "@mui/material";
import Weather from "./Weather";

const TimeWeather = () => {
  return (
    <div className="timeWeather">
      <div className="timeWeather__content">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Time />
          </Grid>
          <Grid item xs={12}>
            <Weather />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TimeWeather;
