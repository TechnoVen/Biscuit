import React from 'react';

export default class Searchbar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "San Francisco, CA"
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit() {
    event.preventDefault();
    console.log("searched!");
  }

  handleDisplay() {
    const {nav, mobile} = this.props;
    let searchClass = "nav-searchbar";
    if (!mobile || nav === 1) searchClass += " selected";
    return searchClass;
  }

  render() {
    return (
      <div className={this.handleDisplay()}>
        <div>Find events nearby</div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" onClick={this.handleSubmit}><i className="fa fa-search"></i></button>
          <input type="text" value={this.state.query} onChange={this.handleSearch}/>
        </form>
      </div>
    );
  }
}
