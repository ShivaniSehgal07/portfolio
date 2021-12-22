import React from 'react';
import Button from '@mui/material/Button';

import './About.css'

const designations = [
  "Web Developer ",
  "Web Designer ",
];

let letter = 0;
class About extends React.Component {
  constructor(props) {
    super(props);
    letter = 0;
    this.state = {
      designation: "",
    };
  }

  writeLetter = (designation) => {
    return new Promise((res, rej) => {
      if (letter && letter <= designation.length) {
        this.setState({ designation: this.state.designation + designation.charAt(letter - 1) }, () => {
          letter++;
          setTimeout(async () => {
            await this.writeLetter(designation);
            return res();
          }, letter === designation.length ? 1000 : 130);
        });
      } else if (letter > 1) {
        this.setState({ designation: this.state.designation.substring(0, letter - 2) }, () => {
          letter--;
          setTimeout(async () => {
            await this.writeLetter(this.state.designation);
            return res();
          }, 130);
        });
      } else {
        letter = 0;
        return res();
      }
    });
  }

  typeWriter = async () => {
    let designationNo = 0;
    while (designationNo < designations.length) {
      let designation = designations[designationNo];
      letter++;
      await this.writeLetter(designation);
      if (designationNo === designations.length - 1) designationNo = 0;
      else designationNo++;
    }
  }

  componentDidMount() {
    this.typeWriter();
  }

  componentWillUnmount() {
    letter = -1;
  }
  render() {
    return (
      <div className="about">
        <div className="about-content-wrapper">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="images/my-pic.jpg" alt="me" />
            </div>
            <div className="column right">
              <div className="text">I'm Shivani and I'm a <span className="color-crimpson">{this.state.designation}</span><span className="typed-cursor typed-cursor--blink">|</span></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
              <div className="mr-tp-18">
                <Button
                  variant="contained"
                  href="/assets/resume.pdf"
                  color="error"
                  size="large"
                  download="Resume (Sehgal Shivani).pdf"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
