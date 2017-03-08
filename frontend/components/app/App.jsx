import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavigationBar from './NavigationBar';
import IndexContent from './IndexContent';
import UserEventsContainer from './UserEventsContainer';
import Account from './Account';
import ViewEvent from './ViewEvent';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mobile: false,
      nav: 1,
      dashboard: 1,
      viewEvent: null
    };

    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleDashNav = this.handleDashNav.bind(this);
    this.toggleScreenChange = this.toggleScreenChange.bind(this);
    this.handleRenderContent = this.handleRenderContent.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleViewEvent = this.handleViewEvent.bind(this);
  }

  componentDidMount() {
    this.toggleScreenInst = this.toggleScreenChange.bind(this);
    this.toggleScreenInst();
    window.addEventListener('resize', this.toggleScreenInst);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.viewEvent && !nextState.viewEvent) {
      return false;
    }
    return true;
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.viewEvent) {
      this.setState({viewEvent: null});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeInst);
  }

  toggleScreenChange() {
    let mobile = true;
    if (window.innerWidth > 600) mobile = false;
    this.setState({mobile});
  }

  handleViewEvent(viewEvent) {
    this.setState({viewEvent});
  }

  handleNavigate(nav) {
    this.setState({nav});
  }

  handleDashNav(dashboard) {
    this.setState({dashboard});
  }

  handleSignOut() {
    this.props.signout()
      .then(() => hashHistory.replace("session"));
  }

  handleRenderContent() {
    const {dashboard, nav, mobile, viewEvent} = this.state;

    if (viewEvent) return <ViewEvent event={viewEvent} />;

    switch (nav) {
      case 3:
      case 1:
        return <IndexContent nav={nav} mobile={mobile} />;
      case 2:
        switch (dashboard) {
          case 1:
            return <UserEventsContainer handleViewEvent={this.handleViewEvent} nav={nav} mobile={mobile} />;
          case 2:
            return <Account nav={nav} mobile={mobile} />;
        }
    }
  }

  render() {
    const {navbar, content, signOut} = this.props;
    const {nav, mobile} = this.state;
    return (
      <main className="wrapper">
        {navbar || <NavigationBar
          nav={nav}
          mobile={mobile}
          handleNavigate={this.handleNavigate}
          handleDashNav={this.handleDashNav}
          handleSignOut={this.handleSignOut}
        />}
        {content || this.handleRenderContent()}
      </main>
    );
  }
}
