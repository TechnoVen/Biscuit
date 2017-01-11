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
  }

  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.redirect();
    }
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
    this.props.processForm(user).then(() => this.redirect());
  }

  redirect() {
    hashHistory.push('/');
  }

  navLink() {
    if (this.props.formType === 'signin') {
			return (
        <Link to="/signup">Click here if you have never signed up before</Link>
      );
		} else {
			return (
        <Link to="/signin">Click here to log into an existing account</Link>
      );
		}
  }

  render() {
    const {formType} = this.props;
    return (
      <section className="container">
        <div className="session-container">
          <h1>Join a kibble meet</h1>
          <p>
            Thousands of strangers across the world have set up playdates with
            friendly and playful pets. We can't wait for you to experience this.
          </p>
          <SessionFormItem
            handleSubmit={this.handleSubmit}
            handleUpdate={this.handleUpdate}
            user={this.state}
            formType={formType}
            />
          {this.navLink()}
        </div>
      </section>
    );
  }
}
