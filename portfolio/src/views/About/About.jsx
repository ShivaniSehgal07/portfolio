import React from 'react';
import ReactGA from 'react-ga';
import Button from '@mui/material/Button';

import localisedStrings from '../../assets/lib/localisations';
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
      <div className="about content-wrapper-parent">
        <div className="about-content-wrapper content-wrapper">
          <h2 className="title">{localisedStrings['About me']}
            <span className="title-after">{localisedStrings['who i am']}</span>
          </h2>
          <div className="about-content content">
            <div className="column left">
              <img src="images/my-pic.jpg" alt="me" />
            </div>
            <div className="column right">
              <div className="text">{localisedStrings["I'm"]} Shivani {localisedStrings["and I'm a "]}
                <div className="inline-block">
                  <span className="color-crimpson">{this.state.designation}</span>
                  <span className="typed-cursor typed-cursor--blink">|</span>
                </div>
              </div>
              <p>
                {localisedStrings.ABOUT_ME_PART_1} <b>React JS</b> {localisedStrings.ABOUT_ME_PART_2} <b>Node JS, Java</b>,
                <b> MongoDB and MySQL</b>. {localisedStrings.ABOUT_ME_PART_3}
              </p>
              <div className="mr-tp-18">
                <Button
                  variant="contained"
                  href="assets/resume.pdf"
                  color="error"
                  size="large"
                  download="Resume (Sehgal Shivani).pdf"
                  onClick={() => {
                    ReactGA.event({
                      action: 'Downloaded Resume',
                      category: 'Click',
                    });
                  }}
                >
                  {localisedStrings["Download Resume"]}
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
