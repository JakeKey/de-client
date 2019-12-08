import React, { useState } from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang'

import { Button, LoginInput, StyledLink } from './components/inputs';

const Login = ({ t }) => {
  const [state, setState] = useState({ username: '', password: '' });

  const handleUsername = e => {
    const { value } = e.target;
    setState({ ...state, username: value })
  };

  const handlePassword = e => {
    const { value } = e.target;
    setState({ ...state, password: value })
  };

  return (
    <>
      <LoginForm
        t={t}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
      />
      <Button primary >
        <StyledLink to="/login">{t('landingpage_login_button')}</StyledLink>
      </Button>
    </>
  );
};

const LoginForm = ({ t, handleUsername, handlePassword }) => (
  <>
    <LoginInput
      type={'text'}
      name={'username'}
      placeholder={t('landingpage_username_input')}
      onChange={handleUsername}
    />
    <LoginInput
      type={'password'}
      name={'password'}
      placeholder={t('landingpage_password_input')}
      onChange={handlePassword}
    />
  </>
);

export default reduxLang('landingpage')(connect()(Login));