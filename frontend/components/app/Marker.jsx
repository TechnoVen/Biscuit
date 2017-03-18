import React from 'react';


export default class Marker extends React.Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      position: 'relative',
      left: -16,
      top: -16
    };
    return (
      <svg style={style} width={32} height={32} viewBox="0 0 48 48">
        <path fill="#0CB" d="M24 0c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z">
        </path>
      </svg>
    );
  }
}
