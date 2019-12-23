import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang'

import { LandingPageWrapper } from './components/containers';
import { Title } from './components/texts';
import RegisterForm from './RegisterForm';


function RegisterPage({ t }) {
  return (
    <LandingPageWrapper>
      <Title>{t('landingpage_register_title')}</Title>
      <RegisterForm />
    </LandingPageWrapper>
  );
};

export default reduxLang('landingpage')(connect()(RegisterPage));