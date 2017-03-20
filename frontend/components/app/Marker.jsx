import React from 'react';

export default class Marker extends React.Component {
  constructor() {
    super();
  }

  render() {
    const svgStyle = {
      position: 'relative',
      left: -16,
      top: -16,
      width: 32,
      height: 32,
      cursor: 'pointer'
    };

    const pathStyle = {
      fill: "#0CB",
    };

    let eventStyle = {
      position: "relative",
      backgroundColor: "#0CB",
      width: 120,
      height: 75,
      top: -85,
      left: -20,
      display: "none",
      cursor: "pointer",
      wordWrap: "break-word"
    };

    if (this.props.$hover) {
      svgStyle.left = -20;
      svgStyle.top = -24;
      svgStyle.width = 40;
      svgStyle.height = 40;
      eventStyle.display = 'block';
    }

    const {event, handleViewEvent} = this.props;

    return (
      <div>
        <svg style={svgStyle} viewBox="0 0 48 48">
          <path style={pathStyle} d="M24 0c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z">
          </path>
        </svg>
        <div style={eventStyle} onClick={() => handleViewEvent(event)}>
          <div>{event.title}</div>
          <div>{event.location}</div>
          <div>{event.date}</div>
        </div>
      </div>
    );
  }
}
