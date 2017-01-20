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

  let nameField, demoAccBtn, paramDropdown, submitBtn = 'sign in';

  if (formType !== 'signin') {
    nameField = (
      <input
        type="text"
        value={user.first_name}
        placeholder="First name"
        onChange={handleUpdate('first_name')}
      />
    );

    submitBtn = 'join biscuit';

    demoAccBtn = (
      <button className="demo-button" type="button" onClick={enterDemoAccount}>
        demo account
      </button>
    );

    paramDropdown = (
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

  return (
    <form className="session-form" onSubmit={handleSubmit}>
      <SessionImageUpload setUserImageUrl={setUserImageUrl}/>
      {nameField}
      <input
        type="text"
        placeholder="Email address"
        value={user.email}
        onChange={handleUpdate('email')}
      />
      {paramDropdown}
      <input
        type="password"
        placeholder="Password (at least 8 characters long!)"
        value={user.password}
        onChange={handleUpdate('password')}
      />
      <button type="submit">{submitBtn}</button>
      {demoAccBtn}
    </form>
  );
};

export default SessionFormItem;
