import React from 'react';
import { connect } from 'react-redux';
import reduxLang from './middleware/lang'

import { StyledLink } from './components/inputs';
import { Title, SimpleText } from './components/texts';
import Login from './Login';
import styled from 'styled-components';
import { colors } from './styles/colors';

const LandingPage = ({ t }) => {
  return (
    <LandingPageWrapper >
      <Title>{t('landingpage_login_title')}</Title>
      <FormWrapper >
        <Login />
        <SimpleText>{t('landingpage_login_or')} </SimpleText>
        <StyledLink color={'#00798c'} bold to="/register">{t('landingpage_register_button')}</StyledLink>
      </FormWrapper>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled.div`
  background: ${props => props.primary ? colors.gunmetal : colors.shamrock};
  display: flex;

  flex-direction: column; 
  align-content: center;
  margin: 10vh 30vw;
  padding: 5vh 5vw;
  border: 2px solid palevioletred;
  border-radius: 20px;
`;

const FormWrapper = styled.div`
  background: ${'#dbf4ad'};
  display: flex;

  flex-direction: column; 
  align-content: center;
  padding: 5vh 5vw;
  border: 2px solid palevioletred;
  border-radius: 20px;
`;

export default reduxLang('landingpage')(connect()(LandingPage));