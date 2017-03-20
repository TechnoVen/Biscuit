import React from 'react';
import HostingProfileEditItem from './HostingProfileEditItem';
import HostingProfileDisplayItem from './HostingProfileDisplayItem';

export default class HostingProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      hostProfile: {
        detail1: "",
        detail2: "",
        detail3: "",
        id: null
      },
      editing: null,
      saved: false
    };

    this.renderEditOrDisplay = this.renderEditOrDisplay.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateHostProfile = this.updateHostProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchHostProfile();
  }

  componentWillReceiveProps(nextProps) {
    const hostProfile = nextProps.hostProfile;
    if (hostProfile) {
      this.setState({hostProfile});
    }
  }

  updateInput(field) {
    return e => {
      const {hostProfile} = this.state;
      hostProfile[field] = e.target.value;
      this.setState({hostProfile, saved: false});
    };
  }

  renderEditOrDisplay(key, num) {
    const {hostProfile} = this.state;
    if (this.state.editing === key) {
      return (
        <HostingProfileEditItem
          key={`${key}-${num}`}
          item={key}
          toggleEditing={this.toggleEditing}
          question={`Profile Question ${num}:`}
          description={hostProfile[key]}
          updateInput={this.updateInput}
        />
      );
    } else {
      return (
        <HostingProfileDisplayItem
          key={`${key}-${num}`}
          item={key}
          toggleEditing={this.toggleEditing}
          question={`Profile Question ${num}:`}
          description={hostProfile[key]}
        />
      );
    }
  }

  toggleEditing(item) {
    return e => {
      e.preventDefault();
      if (this.state.editing) {
        this.setState({editing: null});
      } else this.setState({editing: item});
    };
  }

  updateHostProfile() {
    const host = Object.assign({}, this.state.hostProfile);
    this.props.updateHostProfile(host);
    this.setState({saved: true});
  }

  render() {
    const {hostProfile, saved} = this.state;
    const renderHostProfile = Object.keys(hostProfile).reduce((acc, key, idx) => {
      if (key === 'id') {
        return acc;
      }
      const item = this.renderEditOrDisplay(key, idx);
      return acc.concat(item);
    }, []);

    const savedAlert = [];

    if (saved) {
      savedAlert.push("Your host profile has been saved!");
    }

    return (
      <div className="hosting-profile-container container">
        <h2>Hosting Profile</h2>
        <div className="hosting-profile-about">
          <p>
            Hosting a Biscuit meet can make your life feel more fulfilling, more magical, and it might even make you a better person. Every time you bring out your pets to enjoy with others, you're practicing being inclusive, attentive, and curious without inhibition. Your pets also get to have new friends too. You wouldn't want to deprive them of that now would you? Hosting a meet is an awesome challenge, and in it is huge opportunity to grow as a person with your companion.
          </p>
        </div>
        <ul>
          {renderHostProfile}
        </ul>
        <div>
          {savedAlert}
        </div>
        <button onClick={this.updateHostProfile}>Save</button>
      </div>
    );
  }
}
