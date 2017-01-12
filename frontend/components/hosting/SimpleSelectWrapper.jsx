import React from 'react';
import {SimpleSelect, HighlightedText} from 'react-selectize';
import {toObjArr} from './time_constants';

export default class SimpleSelectWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleUid = this.handleUid.bind(this);
    this.handleRenderOption = this.handleRenderOption.bind(this);
  }

  handleSearchChange(search) {
    this.setState({search});
  }

  handleUid(field) {
    return field.value + this.state.search;
  }


  handleRenderOption(field) {
    return (
      <div className="simple-option">
        <HighlightedText
          partitions = {field.labelPartitions}
          text = {field.label}
          highlightStyle = {{
              backgroundColor: "rgba(255,255,0,0.4)",
              fontWeight: "bold"
          }}
        />
      </div>
      );
  }
  render() {
    const {placeholder, options, value, onTimeChange} = this.props;
    const {search} = this.state;
    return (
      <SimpleSelect
          options={toObjArr(options, search)}
          placeholder={placeholder}
          theme="default"
          onSearchChange={this.handleSearchChange}
          transitionEnter={true}
          transitionLeave={true}
          onValueChange={onTimeChange(value)}
          renderOption={this.handleRenderOption}
      />
    );
  }
}
