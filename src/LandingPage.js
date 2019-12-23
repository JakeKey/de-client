import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang'

import { LandingPageWrapper } from './components/containers';
import { Title } from './components/texts';
import LoginForm from './LoginForm';


function LandingPage({ t }) {
  return (
    <LandingPageWrapper >
      <Title>{t('landingpage_login_title')}</Title>
      <LoginForm />
    </LandingPageWrapper>
  );
};

export default reduxLang('landingpage')(connect()(LandingPage));