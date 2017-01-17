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
      editing: null
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
      const hostProfile = this.state.hostProfile;
      hostProfile[field] = e.target.value;
      this.setState({hostProfile});
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
  }

  render() {
    const {hostProfile} = this.state;
    const renderHostProfile = Object.keys(hostProfile).reduce((acc, key, idx) => {
      if (key === 'id') {
        return acc;
      }
      const item = this.renderEditOrDisplay(key, idx);
      return acc.concat(item);
    }, []);

    return (
      <div className="hosting-profile-container container">
        <h2>Hosting Profile</h2>
        <div className="hosting-profile-about">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <ul>
          {renderHostProfile}
        </ul>
        <button onClick={this.updateHostProfile}>Save</button>
      </div>
    );
  }
}
