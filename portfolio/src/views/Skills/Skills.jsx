import React from 'react';
import Slider from '@mui/material/Slider';

import localisedStrings from '../../assets/lib/localisations';
import { techs, tools } from '../../assets/lib/skills';
import './Skills.css';

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
    };
  }

  renderSkills = (skills) => (
    skills.map((skill) => (
      <div className="skill" key={skill.name}>
        <div className="info">
          <span style={skill.style || {}}>{skill.name}</span>
          <span>{skill.percent}%</span>
        </div>
        <Slider style={{ padding: "0px" }} value={this.state.isMounted ? skill.percent : 0} color="error" components={{ Thumb: () => (<></>) }} />
      </div>
    ))
  );

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 10);
  }

  render() {
    return (
      <div className="skills content-wrapper-parent">
        <div className="skills-content-wrapper content-wrapper">
          <h2 className="title">{localisedStrings['My Skills']}</h2>
          <div className="skills-content content flex">
            <div className="column left">
              <div className="text">{localisedStrings.Technologies}</div>
              {this.renderSkills(techs)}
            </div>
            <div className="column right">
              <div className="text">{localisedStrings.Tools}</div>
              {this.renderSkills(tools)}
            </div>
          </div>
        </div>
        <div className="skills-img-wrapper">
          <img className="skills-img" src="images/skills-bg.gif" alt="GIF"></img>
        </div>
      </div>
    );
  }
}

export default Skills;
