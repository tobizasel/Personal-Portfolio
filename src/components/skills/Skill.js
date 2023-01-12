import React from "react";
import "./progressBar.scss";

const Skill = ({ percentage }) => {
  
  return (
    <>
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <div className="number">{percentage}%</div>
          </div>
        </div>
      </div>
      <svg
        className="skill--stroke"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#00B4DB" />
            <stop offset="100%" stop-color="#0083B0" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{
            strokeDashoffset: `${472-472 * (percentage / 100)}`
        }} />
      </svg>
    </>
  );
};

export default Skill;
