import React from 'react';
import Slider from '@mui/material/Slider';
import { techs, tools } from '../../assets/lib/skills';

import './Skills.css';

class Skills extends React.Component {
  renderSkills = (skills) => (
    skills.map((skill) => (
      <div className="skill" key={skill.name}>
        <div className="info">
          <span>{skill.name}</span>
          <span>{skill.percent}%</span>
        </div>
        <Slider style={{ padding: "0px" }} value={skill.percent} color="error" components={{ Thumb: () => (<></>) }} />
      </div>
    ))
  );

  render() {
    return (
      <div className="skills">
        <div className="skills-content-wrapper">
          <h2 className="title">My Skills</h2>
          <div className="skills-content flex">
            <div className="column left">
              <div className="text">Technologies</div>
              {this.renderSkills(techs)}
            </div>
            <div className="column right">
              <div className="text">Tools</div>
              {this.renderSkills(tools)}
            </div>
          </div>
        </div>
        <div className="skills-img-wrapper">
          <img className="skills-img" src="../../images/skills-bg.gif" alt="GIF"></img>
        </div>
      </div>
    );
  }
}

export default Skills;
