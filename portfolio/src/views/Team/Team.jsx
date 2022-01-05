import React from 'react';
import ReactGA from 'react-ga';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import localisedStrings from '../../assets/lib/localisations';
import members, { settings } from '../../assets/lib/team';
import './Team.css';

class Team extends React.Component {
  getProjects = () => (
    members.map((member) => (
      <div className="team-card" onClick={member.link ? () => {
        ReactGA.event({
          action: 'Clicked on team',
          category: member.name,
          memberName: member.name,
        });
        window.open(member.link);
      } : () => { }}>
        <img className="team-logo" src={member.logo} alt="logo" />
        <div className="team-name">{member.name}</div>
        <div className="team-description">{localisedStrings[member.description]}</div>
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
      <div className="team content-wrapper-parent">
        <div className="team-content-wrapper content-wrapper">
          <h2 className="title">{localisedStrings['My Team']}
            <span className="title-after">{localisedStrings["who with me"]}</span>
          </h2>
          <div className="team-wrapper">
            {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
