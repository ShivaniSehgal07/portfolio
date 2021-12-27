import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import localisedStrings from '../../assets/lib/localisations';
import projects, { settings } from '../../assets/lib/projects';
import './Projects.css';

class Projects extends React.Component {
  getProjects = () => (
    projects.map((project) => (
      <div className="project-card" onClick={project.link ? () => window.open(project.link) : () => { }}>
        <img className="project-logo" src={project.logo} alt="logo" />
        <div className="project-name">{project.name}</div>
        <div className="project-description">{localisedStrings[project.description]}</div>
      </div>
    ))
  );

  renderProjects = () => (
    <Slider {...settings}>
      { this.getProjects()}
    </Slider>
  );

  render() {
    return (
      <div className="projects content-wrapper-parent">
        <div className="projects-content-wrapper content-wrapper">
          <h2 className="title">{localisedStrings['My Projects']}</h2>
          <div className="projects-wrapper">
            {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
