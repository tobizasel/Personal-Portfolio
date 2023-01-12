import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skill from "./Skill";
import "./skills.scss";

const SkillsCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className="skills" id="skills">
      <Row>
        <Col>
          <div className="skills__container">
            <h2 className="skills__title">Skills</h2>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skills__carousel"
            >
              <div className="skills__item">
                <img src="../assets/circular-bar-75.png" />
                <h4>HTML</h4>
              </div>
              <div className="skills__item">
                <img src="../assets/circular-bar-75.png" />
                <h4>CSS</h4>
              </div>
              <div className="skills__item">
                <img src="../assets/circular-bar-75.png" />
                <h4>JavaScript</h4>
              </div>
              <div className="skills__item">
                <img src="../assets/circular-bar-75.png" />
                <h4>React</h4>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsCarousel;
