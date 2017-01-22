import React from 'react';
import HostingProfileEditItem from './HostingProfileEditItem';
import HostingProfileDisplayItem from './HostingProfileDisplayItem';

export default class HostingProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {
        profile_1: "",
        profile_2: "",
        profile_3: ""
      },
      editing: null,
      saved: false
    };

    this.renderEditOrDisplay = this.renderEditOrDisplay.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentDidMount() {
    const {profile} = this.props;
    this.setState({profile});
  }

  updateInput(field) {
    return e => {
      const {profile} = this.state;
      profile[field] = e.target.value;
      this.setState({profile, saved: false});
    };
  }

  renderEditOrDisplay(key, num) {
    const {profile} = this.state;
    if (this.state.editing === key) {
      return (
        <HostingProfileEditItem
          key={`${key}-${num}`}
          item={key}
          toggleEditing={this.toggleEditing}
          question={`Profile Question ${num}:`}
          description={profile[key]}
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
          description={profile[key]}
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

  updateProfile() {
    const {updateUser, userId} = this.props;
    const {profile} = this.state;
    const user = Object.assign({}, profile, {id: userId});
    console.log(user);

    updateUser(user);

    this.setState({saved: true});
  }

  render() {
    const {profile, saved} = this.state;
    const renderProfile = Object.keys(profile).reduce((acc, key, idx) => {
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
          {renderProfile}
        </ul>
        <div>
          {savedAlert}
        </div>
        <button onClick={this.updateProfile}>Save</button>
      </div>
    );
  }
}
