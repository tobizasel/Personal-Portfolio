import React, { useState } from "react";
import "./navegation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navegation = () => {
  const [active, setActive] = useState("home");

  const onUpdateActive = (element) => {
    setActive(element);
  };

  return (
    <nav className="navbar">
      <h2 className="navbar__title">Tobias Zaselsky</h2>
      <ul className="navbar__left">
        <div className="navbar__links">
          <a href="#home" onClick={() => onUpdateActive("home")}>
            <li className={active == "home" ? "nav__link active" : "nav__link"}>
              Home
            </li>
          </a>
          <a href="#skills" onClick={() => onUpdateActive("skills")}>
            <li
              className={active == "skills" ? "nav__link active" : "nav__link"}
            >
              Skills
            </li>
          </a>
          <a href="#projects" onClick={() => onUpdateActive("projects")}>
            <li
              className={
                active == "projects" ? "nav__link active" : "nav__link"
              }
            >
              Projects
            </li>
          </a>
        </div>
        <div className="navbar__icons">
          <a href="#">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="navbar__icon"
            ></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              className="navbar__icon"
            ></FontAwesomeIcon>
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="navbar__icon"
            ></FontAwesomeIcon>
          </a>
        </div>
        <button className="nav__button">Let's Connect</button>
      </ul>
    </nav>
  );
};

export default Navegation;
