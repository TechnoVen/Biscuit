import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavigationBar from './NavigationBar';
import IndexContent from './IndexContent';
import UserEventsContainer from './UserEventsContainer';
import UserProfile from './UserProfile';
import Settings from './Settings';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mobile: false,
      nav: 1,
      dashboard: 1
    };

    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleDashNav = this.handleDashNav.bind(this);
    this.toggleScreenChange = this.toggleScreenChange.bind(this);
    this.handleRenderContent = this.handleRenderContent.bind(this);
  }

  componentDidMount() {
    this.toggleScreenInst = this.toggleScreenChange.bind(this);
    this.toggleScreenInst();
    window.addEventListener('resize', this.toggleScreenInst);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeInst);
  }

  toggleScreenChange() {
    let mobile = true;
    if (window.innerWidth > 600) mobile = false;
    this.setState({mobile});
  }

  handleNavigate(nav) {
    this.setState({nav});
  }

  handleDashNav(dashboard) {
    this.setState({dashboard});
  }

  handleRenderContent() {
    const {dashboard, nav, mobile} = this.state;
    switch (nav) {
      case 3:
      case 1:
        return <IndexContent nav={nav} mobile={mobile} />;
      case 2:
        switch (dashboard) {
          case 1:
            return <UserEventsContainer nav={nav} mobile={mobile} />;
          case 2:
            return <UserProfile nav={nav} mobile={mobile} />;
          case 3:
            return <Settings nav={nav} mobile={mobile} />;
        }
    }
  }

  render() {
    const {navbar, content} = this.props;
    const {nav, mobile} = this.state;
    return (
      <main className="wrapper">
        {navbar || <NavigationBar nav={nav} mobile={mobile} handleNavigate={this.handleNavigate} handleDashNav={this.handleDashNav}/>}
        {content || this.handleRenderContent()}
      </main>
    );
  }
}
