import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Call from "../../images/call.png";

const Skills = () => {
  useEffect(() => {
    const theIds = document.querySelectorAll(".the-progress span");
    theIds.forEach((id) => {
      console.log();
    });

    const theTargetSection = document.querySelector(
      ".contentSkills .bottomContent"
    );
    window.onscroll = function () {
      const skillOffsetTop = theTargetSection.offsetTop;
      const skillOuterHeight = theTargetSection.offsetHeight;
      const windowHeight = this.innerHeight;
      const windowScrollTop = this.pageYOffset;
      if (windowScrollTop > skillOffsetTop + skillOuterHeight - windowHeight) {
        theIds.forEach((id) => {
          const idPercent = id.getAttribute("data-id");
          id.style.width = `${idPercent}%`;
          id.style.transition = "all 0.5s";
        });
      }
    };
  }, []);

  return (
    <div className="skills">
      <div className="contentSkills">
        <div className="topContentSkill">
          <div className="imageContainer">
            <img src={Call} alt="skills-img" />
          </div>
          <div className="skillsHeading">
            <Typography variant="h4">SUCCESS 100%</Typography>
          </div>
        </div>
        <div className="bottomContent">
          <div className="contentWrapper">
            <div className="skill">
              <h3>
                Proficiency<span>90%</span>
              </h3>
            </div>
            <div className="the-progress">
              <span data-id={90}></span>
            </div>
          </div>
          <div className="contentWrapper">
            <div className="skill">
              <h3>
                Reliability<span>100%</span>
              </h3>
            </div>
            <div className="the-progress">
              <span data-id={100}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
