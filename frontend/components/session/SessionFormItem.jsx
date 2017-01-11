import React from 'react';
import { Link } from 'react-router';

const SessionFormItem = ({handleSubmit, handleUpdate, formType, user}) => {
  let nameField = () => {
    if (formType !== "signin") {
      return <input
              type="text"
              value={user.first_name}
              placeholder="First name"
              onChange={handleUpdate('first_name')}
            />;
    }
  };

  const submitButton = formType === 'signin' ? 'sign in' : 'meet kibble friends';
  return (
    <form onSubmit={handleSubmit}>
      {nameField()}
      <input
        type="text"
        placeholder="Email address"
        value={user.email}
        onChange={handleUpdate('email')}
      />
      <input
        type="password"
        placeholder="Password (at least 8 characters long!)"
        value={user.password}
        onChange={handleUpdate('password')}
      />
      <button type="submit">{submitButton}</button>
    </form>
  );
};

export default SessionFormItem;
