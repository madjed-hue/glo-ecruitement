import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const weatherVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: 1.5 } },
};
const weatherContentVariants = {
  animationOne: {
    y: [-10, 10],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
    },
  },
};

const Weather = () => {
  const API_KEY = process.env.REACT_APP_APP_KEY;
  const [ipAddress, setIpAddress] = useState({});
  const [weatherOption, setWeatherOption] = useState({});
  const baseUrl = "https://api.weatherapi.com/v1/current.json";

  useEffect(() => {
    async function fetchIpAddress() {
      const request = await axios.get("https://geolocation-db.com/json/");
      const response = request.data;
      setIpAddress(response);
    }

    fetchIpAddress();
  }, []);
  const { IPv4 } = ipAddress;

  useEffect(() => {
    async function fetchWeather() {
      const request = await axios.get(
        `${baseUrl}?key=051ecc51a3ca4f2cae7150342222802&q=${IPv4}&aqi=no`
      );
      const response = request.data;
      setWeatherOption(response);
    }
    fetchWeather();
  }, [API_KEY, IPv4]);
  // const { current, location } = weatherOption;
  return (
    <motion.div
      className="wetherComponent"
      variants={weatherVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="weatherContent">
        <div className="weatherLeftSide">
          <div className="city">
            <Typography variant="h4">
              {" "}
              {weatherOption.location && weatherOption.location.region}{" "}
            </Typography>
            <Typography variant="span">
              {weatherOption.location && weatherOption.location.localtime}
            </Typography>
          </div>
          <div className="temperature">
            <Typography variant="h3">
              {weatherOption.current && weatherOption.current.temp_c} C
            </Typography>
            <Typography variant="span">
              {weatherOption.current && weatherOption.current.feelslike_c} /{" "}
              {weatherOption.current && weatherOption.current.temp_c} C
            </Typography>
          </div>
          <div className="iconAndDesc">
            <div className="icon">
              <img
                src={
                  weatherOption.current && weatherOption.current.condition.icon
                }
                alt="weather_icon"
              />
            </div>
            <Typography>
              {weatherOption.current && weatherOption.current.condition.text}
            </Typography>
          </div>
          <div className="windAndHum">
            <Typography variant="spaan">
              Wind : {weatherOption.current && weatherOption.current.wind_kph}
              km/h
            </Typography>
            <Typography variant="spaan">
              Humidity :{" "}
              {weatherOption.current && weatherOption.current.humidity}%
            </Typography>
          </div>
        </div>
        <div className="weatherRightSide">
          <motion.div variants={weatherContentVariants} animate="animationOne">
            <img
              src={
                weatherOption.current && weatherOption.current.condition.icon
              }
              alt="weather_icon"
              style={{ width: "150px", height: "150px" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Weather;
