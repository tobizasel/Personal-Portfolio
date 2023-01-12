import React from "react";
import "./section.scss";

const Section = () => {
  return (
    <div className="section">
      <div className="section__titles">
        <div className="section__welcome--wrapper">
          <h4 className="section__welcome">Welcome to my Portfolio</h4>
        </div>
        <h1 className="section__title">Hi, My name is Tobias Zaselsky</h1>
        <h1 className="section__title">I'm a Front-End Developer</h1>
        <p className="section__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
      </div>

      <img
        className="section__img"
        src="../assets/ilustracion.png"
        alt="Tobias Zaselsky"
      />
    </div>
  );
};

export default Section;
