import React from 'react';
import emailjs from 'emailjs-com';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

import localisedStrings from '../../assets/lib/localisations';
import contactProperties, { formInputs } from '../../assets/lib/contact';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      isLoading: false,
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    this.state = {
      ...this.initialState,
    };
  }

  onChange = (field, value) => {
    this.setState({ [field]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true }, () => {
      emailjs.send("service_bry3wud", "shivani-contact-form", this.state, 'user_Ee6EKXmqz7fLECeaQZdwi')
        .then(() => {
          this.setState({ ...this.initialState });
        })
        .catch((err) => {
          console.log('error', err);
        });
    });
  }

  renderProperties = () => (
    contactProperties.map((property) => (
      <div className="icons" key={property.name}>
        <div className="row">
          {property.icon}
          <div className="info">
            <div className="head">{localisedStrings[property.name]}</div>
            <div
              className={`sub-title ${property.onClick ? "pointer-cursor" : ""}`}
              onClick={property.onClick || (() => { })}
            >
              {property.value}
            </div>
          </div>
        </div>
      </div>
    ))
  );

  render() {
    const [nameInput, emailInput, subjectInput, messageInput] = formInputs;
    const { name, email, message, subject } = this.state;
    return (
      <div className="contact content-wrapper-parent">
        <div className="contact-content-wrapper content-wrapper">
          <h2 className="title">{localisedStrings["Contact Me"]}
            <span className="title-after">{localisedStrings['get in touch']}</span>
          </h2>
          <div className="contact-content content">
            <div className="column left">
              <div className="text">{localisedStrings["Get in Touch"]}</div>
              <p>
                {localisedStrings["Please feel free to reach me out."]}&nbsp;
                {localisedStrings["If you don't get a reply immediately, I might just be coding out a new screen."]}&nbsp;
                {localisedStrings["I'll get back to you as soon as I can. That's a promise!"]}
              </p>
              {this.renderProperties()}
            </div>
            <div className="column right">
              <div className="text">{localisedStrings["Message me"]}</div>
              <form onSubmit={this.onSubmit}>
                <div className="fields">
                  <div className="flex flex-space-between text-input-wrapper">
                    <TextField
                      {...nameInput}
                      value={name}
                      onChange={(e) => this.onChange('name', e.target.value)}
                    />
                    <TextField
                      {...emailInput}
                      value={email}
                      onChange={(e) => this.onChange("email", e.target.value)}
                    />
                  </div>
                  <TextField
                    {...subjectInput}
                    value={subject}
                    onChange={(e) => this.onChange("subject", e.target.value)}
                  />
                  <TextField
                    {...messageInput}
                    value={message}
                    onChange={(e) => this.onChange("message", e.target.value)}
                  />
                  <div className="flex flex-end mr-tp-8">
                    <LoadingButton
                      loading={this.state.isLoading}
                      loadingPosition="end"
                      type="submit" variant="contained" color="error" endIcon={<SendIcon />}>{localisedStrings["Send Message"]}</LoadingButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
