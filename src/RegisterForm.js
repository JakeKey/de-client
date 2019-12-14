import React, { useState } from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang';
import { Button, LoginInput } from './components/inputs';
import { userRegister } from './actions';

function RegisterForm({ t, userRegister }) {
  const [state, setState] = useState({ username: '', password: '', passwordVerify: '' });

  const handleUsername = e => {
    const { value } = e.target;
    setState({ ...state, username: value })
  };

  const handlePassword = e => {
    const { value } = e.target;
    setState({ ...state, password: value })
  };

  const handlePasswordVerify = e => {
    const { value } = e.target;
    setState({ ...state, passwordVerify: value })
  };

  const handleRegister = () => {
    // TODO add verification
    if (state.password !== state.passwordVerify) return; 
    userRegister(state.username, state.password);
  };

  return (
    <>
      <RegisterFields
        t={t}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handlePasswordVerify={handlePasswordVerify}
        username={state.username}
        password={state.password}
        passwordVerify={state.passwordVerify}
      />
      <Button primary onClick={handleRegister} >
        {t('landingpage_register')}
      </Button>
    </>
  );
};

function RegisterFields({ t, handleUsername, handlePassword, handlePasswordVerify, username, password, passwordVerify }) {
  return (
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
      <LoginInput
        type={'password'}
        name={'password_verify'}
        placeholder={t('landingpage_password_verify_input')}
        onChange={handlePasswordVerify}
        value={passwordVerify}
      />
    </>
  );
}

const mapStateToProps = ({ }) => {
  //const { token } = user;
  return {  };
};

export default reduxLang('landingpage')(connect(mapStateToProps, { userRegister })(RegisterForm));