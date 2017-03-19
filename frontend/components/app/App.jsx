import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavigationBar from './NavigationBar';
import IndexContent from './IndexContent';
import UserEventsContainer from './UserEventsContainer';
import Account from './Account';
import ViewEvent from './ViewEvent';
import EventFormContainer from './EventFormContainer';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mobile: false,
      nav: 1,
      dashboard: 1,
      viewEvent: null,
      geolocation: {
        lat: 37.791305,
        lng: -122.3937352
      }
    };

    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleDashNav = this.handleDashNav.bind(this);
    this.toggleScreenChange = this.toggleScreenChange.bind(this);
    this.handleRenderContent = this.handleRenderContent.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleViewEvent = this.handleViewEvent.bind(this);
    this.handleChangeGeolocation = this.handleChangeGeolocation.bind(this);
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
    this.setState({viewEvent, nav: 2});
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
    const {dashboard, nav, mobile, viewEvent, geolocation} = this.state;

    if (viewEvent) return <ViewEvent event={viewEvent} />;

    switch (nav) {
      case 3:
        return <EventFormContainer handleViewEvent={this.handleViewEvent} />;
      case 1:
        return <IndexContent geolocation={geolocation} />;
      case 2:
        switch (dashboard) {
          case 1:
            return <UserEventsContainer handleViewEvent={this.handleViewEvent}/>;
          case 2:
            return <Account />;
        }
    }
  }

  handleChangeGeolocation(geolocation) {
    this.setState({geolocation});
  }

  render() {
    const {navbar, content, signOut} = this.props;
    const {nav, mobile} = this.state;
    return (
      <main className="wrapper">
        {navbar || <NavigationBar
          nav={nav}
          mobile={mobile}
          handleChangeGeolocation={this.handleChangeGeolocation}
          handleNavigate={this.handleNavigate}
          handleDashNav={this.handleDashNav}
          handleSignOut={this.handleSignOut}
        />}
        {content || this.handleRenderContent()}
      </main>
    );
  }
}
