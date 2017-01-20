import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionFormItem from './SessionFormItem';
import {cities} from '../hosting/time_constants';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      Pet: "",
      City: "",
      image_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.setUserImageUrl = this.setUserImageUrl.bind(this);
  }

  handleUpdate(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {email, password, first_name, Pet, City, image_url} = this.state;
    const {formType, processForm, createHost} = this.props;
    const user = {};

    user.email = email;
    user.password = password;

    if (formType !== 'signin') {
      user.first_name = first_name;
      user.pet_type = Pet;
      user.image_url = image_url.length > 0 ? image_url : 'https://res.cloudinary.com/dmmcusgxy/image/upload/c_scale,h_300/v1484931518/SEED/cead0f63-cee3-4a45-af56-97b93d9b9189.jpg';
      user.city_id = cities.indexOf(City) + 1;
    }

    processForm(user)
      .then(() => hashHistory.push('/'));
  }

  handleSelectChange(listType, selection) {
    this.setState({[listType]: selection});
  }

  setUserImageUrl(image_url) {
    this.setState({image_url});
  }

  render() {
    const {formType, errors, enterDemoAccount} = this.props;

    const formErrors = errors[0] ? <p className="form-errors">{errors[0]}</p> : "";

    let formHeading = "Sign into your account",
        formDescription = "We're glad to have you back",
        formSwitchLink = "/signup",
        formSwitchText = "Click here if you have never signed up before";

    if (formType !== 'signin') {
      formHeading = "Join biscuit and meet your newest friends";
      formDescription = "Thousands of strangers across the world have joined " +
      "Biscuit to play with friendly and adorable pets. You also get to meet " +
      "some cool people too.";
      formSwitchLink = "/signin";
      formSwitchText = "Click here to log into an existing account";
    }
    return (
      <section className="container">
        <div className="session-container">
          <div>
            <h2>{formHeading}</h2>
            <p>{formDescription}</p>
          </div>
          {formErrors}
          <SessionFormItem
            handleSubmit={this.handleSubmit}
            handleUpdate={this.handleUpdate}
            user={this.state}
            formType={formType}
            enterDemoAccount={enterDemoAccount}
            handleSelectChange={this.handleSelectChange}
            setUserImageUrl={this.setUserImageUrl}
            />
          <Link to={formSwitchLink}>{formSwitchText}</Link>
        </div>
      </section>
    );
  }
}
