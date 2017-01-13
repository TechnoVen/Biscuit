import React from 'react';

export default class HostingProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        detail1: "",
        detail2: "",
        detail3: ""
      },
      editing: null
    };

    this.renderEditOrDisplay = this.renderEditOrDisplay.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateHostProfile = this.updateHostProfile.bind(this);
  }

  componentDidMount() {
    const details = this.props.details;
    this.setState({details});
  }

  updateInput(field) {
    return e => {
      const details = this.state.details;
      details[field] = e.target.value;
      this.setState({details});
    };
  }

  renderEditOrDisplay(item, num) {
    const {details} = this.state;
    if (this.state.editing === item) {
      return (
        <HostingProfileEditItem
          key={`${item}-${num}`}
          item={item}
          toggleEditing={this.toggleEditing}
          question={`Profile Question ${num}:`}
          description={details[item]}
          updateInput={this.updateInput}
        />
      );
    } else {
      return (
        <HostingProfileDisplayItem
          key={`${item}-${num}`}
          item={item}
          toggleEditing={this.toggleEditing}
          question={`Profile Question ${num}:`}
          description={details[item]}
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
    const host = Object.assign({}, this.state.details);
    this.props.updateProfile(host);
  }

  render() {
    const renderHostProfile = Object.keys(this.state.details).map((d, id) => {
      return this.renderEditOrDisplay(d, id);
    });

    return (
      <div>
        <h2>hosting profile goes here!!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          {renderHostProfile}
        </ul>
        <button onClick={this.updateHostProfile}>Save</button>
      </div>
    );
  }
}


const HostingProfileEditItem = ({
  item,
  updateInput,
  toggleEditing,
  question,
  description
}) => (
  <li>
    <div>{question}</div>
    <form onSubmit={toggleEditing(item)}>
      <textarea
        autoFocus
        type="text"
        onChange={updateInput(item)}
        onBlur={toggleEditing(item)}
        value={description}
      />
    <button type="submit" onClick={toggleEditing(item)}>Save</button>
    </form>
  </li>
);

const HostingProfileDisplayItem = ({
  item,
  toggleEditing,
  question,
  description
}) => (
  <li onClick={toggleEditing(item)}>
    <div>{question}</div>
    <div>{description}</div>
  </li>
);
