import { motion } from "framer-motion";
import React, { useEffect } from "react";

const unitVaraints = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { duration: 0.3, delay: 0.4 } },
  visible1: { y: "0", opacity: 1, transition: { duration: 0.3, delay: 0.5 } },
  visible2: { y: "0", opacity: 1, transition: { duration: 0.3, delay: 0.6 } },
  visible3: { y: "0", opacity: 1, transition: { duration: 0.3, delay: 0.7 } },
  visible4: { y: "0", opacity: 1, transition: { duration: 0.3, delay: 0.8 } },
  visible5: { y: "0", opacity: 1, transition: { duration: 0.3, delay: 0.9 } },
  visible6: { y: "0", opacity: 1, transition: { duration: 0.3, delay: 1 } },
};

const Time = () => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const counter = () => {
    // Get Date Now
    setInterval(() => {
      let dateNow = new Date().toLocaleTimeString("en-us", options);
      const firstDayOfYears = dateNow.split(" ")[0];
      const month = dateNow.split(" ")[1];
      const pureDate = firstDayOfYears.substring(0, firstDayOfYears.length - 1);
      const dayNum = dateNow.split(" ")[2];
      const year = dateNow.split(" ")[3];
      const time = dateNow.split(" ")[4];
      const splittedTime = time.split(":");
      document.querySelector(".day").innerHTML = pureDate;
      document.querySelector(".month").innerHTML = month;
      document.querySelector(".year").innerHTML = year.substring(
        0,
        year.length - 1
      );
      document.querySelector(".days").innerHTML = dayNum.substring(
        0,
        dayNum.length - 1
      );

      document.querySelector(".hours").innerHTML = splittedTime[0];
      document.querySelector(".minutes").innerHTML = splittedTime[1];
      document.querySelector(".seconds").innerHTML = splittedTime[2];
    }, 1000);
  };

  useEffect(() => {
    counter();
  }, [counter]);
  return (
    <div className="events" id="events">
      <div className="container">
        <div className="info">
          <div className="date">
            <motion.div
              className="unit"
              variants={unitVaraints}
              initial="hidden"
              animate="visible"
            >
              <span className="day"></span>
              <span>Day</span>
            </motion.div>
            <motion.div
              className="unit"
              variants={unitVaraints}
              initial="hidden"
              animate="visible1"
            >
              <span className="month"></span>
              <span>Month</span>
            </motion.div>
            <motion.div
              className="unit"
              variants={unitVaraints}
              initial="hidden"
              animate="visible2"
            >
              <span className="year"></span>
              <span>Year</span>
            </motion.div>
            <motion.div
              className="unit"
              variants={unitVaraints}
              initial="hidden"
              animate="visible3"
            >
              <span className="days"></span>
              <span>Day</span>
            </motion.div>
          </div>
          <div className="time">
            <motion.div
              className="unit"
              variants={unitVaraints}
              initial="hidden"
              animate="visible4"
            >
              <span className="hours"></span>
              <span>Hour</span>
            </motion.div>
            <motion.div
              className="unit"
              variants={unitVaraints}
              initial="hidden"
              animate="visible5"
            >
              <span className="minutes"></span>
              <span>Minutes</span>
            </motion.div>
            <motion.div
              className="unit"
              variants={unitVaraints}
              initial="hidden"
              animate="visible6"
            >
              <span className="seconds"></span>
              <span>Seconds</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
