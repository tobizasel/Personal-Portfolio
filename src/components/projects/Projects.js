import React from "react";
import './projects.scss'
import { Tab, Tabs } from "react-bootstrap";
import projects from "../../projects.json"
import Project from "./Project";

const Projects = () => {

  const projectsArray = projects;

  return (
    <div className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>

      <Tabs variant="pills" defaultActiveKey={1} className="projects__tabs">
        <Tab eventKey={1} title="tab-1" className="projects__tab">
          {projectsArray.forEach((project) => {
            if(project.tab === 1){
              <Project title={project.title} description = {project.description} img={project.img}/>
              console.log(project);
              console.log(project.title, project.description)
            }
          })}
        </Tab>
        <Tab eventKey={2} title="tab-2" className="projects__tab">
          Bolas
        </Tab>
        <Tab eventKey={3} title="tab-3" className="projects__tab">
          Tab 3
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
