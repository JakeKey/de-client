import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang'

import { LoginFormWrapper } from './components/containers';
import { StyledLink } from './components/inputs';
import { Title, SimpleText } from './components/texts';
import LoginForm from './LoginForm';


function LandingPage({ t }) {
  return (
    < >
      <Title>{t('landingpage_login_title')}</Title>
      <LoginFormWrapper >
        <LoginForm />
        <SimpleText>{t('landingpage_login_or')} </SimpleText>
        <StyledLink color={'#00798c'} bold to="/register">{t('landingpage_register_button')}</StyledLink>
      </LoginFormWrapper>
    </>
  );
};

export default reduxLang('landingpage')(connect()(LandingPage));