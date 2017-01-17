import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const HostingProfileEditItem = ({
  item,
  updateInput,
  toggleEditing,
  question,
  description
}) => (
  <li className="panel">
    <div className="panel-header">{question}</div>
    <div className="panel-form">
      <TextareaAutosize
        autoFocus
        type="text"
        onChange={updateInput(item)}
        onBlur={toggleEditing(item)}
        value={description}
        />
      <div className="panel-input-border"></div>
    </div>
  </li>
);

export default HostingProfileEditItem;
