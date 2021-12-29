import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import localisedStrings from '../../assets/lib/localisations';
import services, { settings } from '../../assets/lib/services';
import './Services.css';

class Services extends React.Component {
  getServices = () => (
    services.map((service) => (
      <div className="service-card">
        {service.logo}
        <div className="service-name">{localisedStrings[service.name]}</div>
        <div className="service-description">{localisedStrings[service.description]}</div>
      </div>
    ))
  );

  renderServices = () => (
    <Slider {...settings}>
      { this.getServices()}
    </Slider>
  );

  render() {
    return (
      <div className="services content-wrapper-parent">
        <div className="services-content-wrapper content-wrapper">
          <h2 className="title">{localisedStrings['My Services']}
          <span className="title-after">{localisedStrings['what i provide']}</span>
          </h2>
          <div className="services-wrapper">
            {this.renderServices()}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
