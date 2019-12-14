import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang'

import { LoginFormWrapper } from './components/containers';
import { StyledLink } from './components/inputs';
import { Title } from './components/texts';
import RegisterForm from './RegisterForm';


function RegisterPage({ t }) {
  return (
    < >
      <Title>{t('landingpage_register_title')}</Title>
      <LoginFormWrapper >
        <RegisterForm />
        <StyledLink color={'#00798c'} bold to="/">{t('landingpage_register_back')}</StyledLink>
      </LoginFormWrapper>
    </>
  );
};

export default reduxLang('landingpage')(connect()(RegisterPage));