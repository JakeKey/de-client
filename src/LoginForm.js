import React, { useState } from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang';
import { Button, LoginInput, StyledLink } from './components/inputs';

const axios = require('axios');

function LoginForm({ t }) {
  const [state, setState] = useState({ username: '', password: '' });

  const handleUsername = e => {
    const { value } = e.target;
    setState({ ...state, username: value });
  };

  const handlePassword = e => {
    const { value } = e.target;
    setState({ ...state, password: value });
  };

  const handleLogin = () => {
    console.log('logg')
    axios.post('http://localhost:3000/api/auth', {
      username: state.username,
      password: state.password
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <>
      <LoginFields
        t={t}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        username={state.username}
        password={state.password}
      />
      <Button primary onClick={handleLogin} >
        {t('landingpage_login_button')}
      </Button>
    </>
  );
};

const LoginFields = ({ t, handleUsername, handlePassword, username, password }) => (
  <>
    <LoginInput
      type={'text'}
      name={'username'}
      placeholder={t('landingpage_username_input')}
      onChange={handleUsername}
      value={username}
    />
    <LoginInput
      type={'password'}
      name={'password'}
      placeholder={t('landingpage_password_input')}
      onChange={handlePassword}
      value={password}
    />
  </>
);

export default reduxLang('landingpage')(connect()(LoginForm));