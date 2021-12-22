import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projects from '../../assets/lib/projects';

import './Projects.css';

class Projects extends React.Component {
  getProjects = () => (
    projects.map((project) => (
      // <Card className="project-card" onClick={project.link ? () => window.open(project.link) : () => { }}>
      //   <CardActionArea>
      //     {/* <CardMedia
      //       component="img"
      //       height="50"
      //       image={project.logo}
      //       alt="green iguana"
      //     /> */}
      //     <img className="project-logo" src={project.logo} alt="logo" />
      //     <CardContent>
      //       <Typography gutterBottom variant="h6" component="div">
      //         {project.name}
      //       </Typography>
      //       <Typography variant="body2" color="text.secondary">
      //         {project.description}
      //       </Typography>
      //     </CardContent>
      //   </CardActionArea>
      // </Card>
      <div className="project-card" onClick={project.link ? () => window.open(project.link) : () => { }}>
        <img className="project-logo" src={project.logo} alt="logo" />
        <div className="project-name">{project.name}</div>
        <div className="project-description">{project.description}</div>
      </div>
    ))
  );

  renderProjects = () => (
    // <div className="project-row">
    <Carousel showArrows={false}
      className="flex flex-center"
      autoPlay
      showStatus={false}
      centerMode
      centerSlidePercentage={50}
      infiniteLoop
      showThumbs={false}
      // width="100%"
      width="90%"
      >
      { this.getProjects()}
    </Carousel>
    // </div>
  );

  render() {
    return (
      <div className="projects">
        <div className="projects-content-wrapper">
          <h2 className="title">My Projects</h2>
          <div className="projects-wrapper">
            {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
