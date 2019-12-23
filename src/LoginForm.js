import React, { useState } from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang';
import { Button, LoginInput, StyledLink } from './components/inputs';
import { userLogin } from './actions';
import { LoginFormWrapper } from './components/containers';
import { SimpleText } from './components/texts';

function LoginForm({ t, userLogin }) {
  const [state, setState] = useState({ username: '', password: '' });

  const handleUsername = e => {
    const { value } = e.target;
    setState({ ...state, username: value });
  };

  const handlePassword = e => {
    const { value } = e.target;
    setState({ ...state, password: value });
  };

  const handleLogin = e => {
    e.preventDefault();
    userLogin(state.username, state.password);
  };

  return (
    <LoginFormWrapper>
      <LoginFields
        t={t}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        username={state.username}
        password={state.password}
      />
      <Button primary type={'submit'} onClick={handleLogin} >
        {t('landingpage_login_button')}
      </Button>
      <SimpleText>{t('landingpage_login_or')} </SimpleText>
        <StyledLink color={'#00798c'} bold to="/register">{t('landingpage_register_button')}</StyledLink>
    </LoginFormWrapper>
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

const mapStateToProps = ({ }) => {
  //const { token } = user;
  return {  };
};

export default reduxLang('landingpage')(connect(mapStateToProps, { userLogin })(LoginForm));