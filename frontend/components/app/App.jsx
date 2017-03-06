import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavigationBar from './NavigationBar';
import IndexContent from './IndexContent';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nav: 1
    };

    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(nav) {
    this.setState({nav});
  }

  render() {
    const {navbar, content} = this.props;
    const {nav} = this.state;
    return (
      <main className="wrapper">
        {navbar || <NavigationBar nav={nav} handleNavigate={this.handleNavigate} />}
        {content || <IndexContent nav={nav} handleNavigate={this.handleNavigate} />}
      </main>
    );
  }
}
