import React from 'react';
import { Link } from 'react-router';
import Dropdown from '../hosting/Dropdown';
import { petTypes, cities } from '../hosting/time_constants';
import SessionImageUpload from './SessionImageUpload';

const SessionFormItem = ({
  handleSubmit,
  handleUpdate,
  formType,
  user,
  enterDemoAccount,
  handleSelectChange,
  setUserImageUrl
}) => {
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
  const demoAccountButton = () => {
    if (formType !== 'signin') {
      return (
        <button className="demo-button" type="button" onClick={enterDemoAccount}>
          i'd rather use the demo account
        </button>
      );
    }
  };

  const signUpSelectables = () => {
    if (formType !== 'signin') {
      return (
        <div className="session-dropdown">
          <Dropdown
            list={petTypes}
            listType='Pet'
            handleSelectChange={handleSelectChange}
          />
          <Dropdown
            list={cities}
            listType='City'
            handleSelectChange={handleSelectChange}
          />
        </div>
      );
    }
  };
  return (
    <form className="session-form" onSubmit={handleSubmit}>
      <SessionImageUpload setUserImageUrl={setUserImageUrl}/>
      {nameField()}
      <input
        type="text"
        placeholder="Email address"
        value={user.email}
        onChange={handleUpdate('email')}
      />
      {signUpSelectables()}
      <input
        type="password"
        placeholder="Password (at least 8 characters long!)"
        value={user.password}
        onChange={handleUpdate('password')}
      />
      <button type="submit">{submitButton}</button>
      {demoAccountButton()}
    </form>
  );
};

export default SessionFormItem;
