import React from 'react';
import {hashHistory} from 'react-router';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      login: true
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleSession = this.toggleSession.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  toggleSession() {
    const {login} = this.state;
    this.setState({login: !login, email: "", password: ""});
  }

  handleSubmit() {
    event.preventDefault();
    const {signin, signup} = this.props;
    const {email, password, login} = this.state;
    const submitForm = this.state.login ? signin : signup;

    submitForm({email: email, password: password});
  }

  render() {
    const currentType = this.state.login ? 'Log in' : 'Sign up';
    const otherType = !this.state.login ? 'Log in' : 'Sign up';
    return (
      <div className="home-container">
        <div className="login-container">
          <h1>Biscuit</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Email" onChange={this.handleUpdate('email')} value={this.state.email} />
            <input type="password" placeholder="Password" onChange={this.handleUpdate('password')} value={this.state.password} />
            <button type="submit">{currentType}</button>
            <div className="login-divider">
              <div className="divider-line"></div>
              <div className="divider-or">or</div>
              <div className="divider-line"></div>
            </div>
            <div className="session-other" onClick={this.toggleSession}>
              {otherType + ' instead'}
            </div>
          </form>
        </div>
        <div className="demo-container">
          <div>
            Just want to look around? <span>Try the demo</span>
          </div>
        </div>
        <div className="dev-links-container">
          <a href="https://github.com/laed37" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/edwinla" target="_blank">LinkedIn</a>
          <a href="https://edwinla.com/" target="_blank">Portfolio</a>
        </div>
      </div>
    );
  }
}
