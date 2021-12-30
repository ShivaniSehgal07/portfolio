import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import localisedStrings from '../../assets/lib/localisations';
import './Home.css';

const designations = [
  "Web Developer. ",
  "Web Designer. ",
];

let letter = 0;
class Home extends React.Component {
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
      <div className="home content-wrapper-parent">
        <div className='home-content-wrapper content-wrapper'>
          <div className='name-line'>
            {localisedStrings["Hello, My name is"]}
          </div>
          <div className='name'>
            Shivani Sehgal
          </div>
          <div className='i-am-a'>
            {localisedStrings["I'm a"]} <span className='designation'>{this.state.designation}|</span>
          </div>
          <div className="mr-tp-18">
            <Link to="/contact" className="text-decoration-none">
              <Button
                variant="contained"
                color="error"
                size="large"
              >
                {localisedStrings["Contact Me"]}
              </Button>
            </Link>
          </div>
        </div>
        <div className="home-img-wrapper">
          <img className="home-img" src="images/site-header-1.gif" alt="GIF"></img>
        </div>
      </div>
    );
  }
}

export default Home;
