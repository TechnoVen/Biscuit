import React from 'react';
import {Link} from 'react-router-dom';

export default class Session extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleSession = this.toggleSession.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enterDemoAccount = this.enterDemoAccount.bind(this);
  }

  handleUpdate(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  toggleSession() {
    this.setState({email: "", password: ""});
  }

  handleSubmit() {
    event.preventDefault();
    this.props.processForm({...this.state});
  }

  enterDemoAccount() {
    this.props.processForm({
      email: 'guest_user@kibblewstrangers.com',
      password: 'guest_kibble'
    });
  }

  render() {
    const {pathname} = this.props.location;
    const otherPath = pathname === '/login' ? '/signup' : '/login';
    const currentType = pathname === '/login' ? 'Log in' : 'Sign up';
    const otherType = pathname === '/login' ? 'Sign up' : 'Log in';

    return (
      <div className="home-container">
        <div className="login-container">
          <h1>Biscuit</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Email" name="email" onChange={this.handleUpdate} value={this.state.email} />
            <input type="password" placeholder="Password" name="password" onChange={this.handleUpdate} value={this.state.password} />
            <button type="submit">{currentType}</button>
            <div className="login-divider">
              <div className="divider-line"></div>
              <div className="divider-or">or</div>
              <div className="divider-line"></div>
            </div>
            <div className="session-other">
              <Link to={otherPath}>{otherType + ' instead'}</Link>
            </div>
          </form>
        </div>
        <div className="demo-container">
          <div>
            Just want to look around? <span onClick={this.enterDemoAccount}>Try the demo</span>
          </div>
        </div>
      </div>
    );
  }
}
