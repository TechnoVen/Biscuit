import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const HostingProfileDisplayItem = ({
  item,
  toggleEditing,
  question,
  description
}) => (
  <li className="panel" onClick={toggleEditing(item)}>
    <div className="panel-header">{question}</div>
    <div className="panel-desc">{description}</div>
  </li>
);

export default HostingProfileDisplayItem;
