import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionFormItem from './SessionFormItem';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  handleUpdate(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.props.formType === 'signin') {
      delete user.first_name;
    }
    this.props.processForm(user)
      .then(() => hashHistory.push('/'));
  }

  navLink() {
    if (this.props.formType === 'signin') {
			return (
        <Link
          to="/signup"
        >
          Click here if you have never signed up before
        </Link>
      );
		} else {
			return (
        <Link to="/signin">Click here to log into an existing account</Link>
      );
		}
  }

  render() {
    const {formType, errors, enterDemoAccount} = this.props;
    const formErrors = () => {
      if (errors[0]) {
        return <p className="form-errors">{errors[0]}</p>;
      }
    };
    const sessionSplash = () => {
      if (formType === 'signin') {
        return (
          <div>
            <h2>Sign into your account</h2>
            <p>
              We're glad to have you back.
            </p>
          </div>
        );
      } else {
        return (
          <div>
            <h2>Jon a playdate with the cutest pets</h2>
            <p>
              Thousands of strangers across the world have set up playdates with
              friendly and playful pets. We can't wait for you to experience this.
            </p>
          </div>
        );
      }
    };
    return (
      <section className="container">
        <div className="session-container">
          {sessionSplash()}
          {formErrors()}
          <SessionFormItem
            handleSubmit={this.handleSubmit}
            handleUpdate={this.handleUpdate}
            user={this.state}
            formType={formType}
            enterDemoAccount={enterDemoAccount}
            />
          {this.navLink()}
        </div>
      </section>
    );
  }
}
