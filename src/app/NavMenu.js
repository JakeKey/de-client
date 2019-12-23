import React, { Component } from 'react';
import { connect } from 'react-redux';
import reduxLang from '../middleware/lang';
import { Button } from '../components/inputs';
import { NavMenuWrapper } from '../components/containers';
import { userLogout } from '../actions';

import {
  Route,
  Link
} from "react-router-dom";

class NavMenu extends Component {


  render() {
    const { t, userLogout } = this.props;
    return (
      <NavMenuWrapper >
        <Button primary onClick={''} >{t('home_nav_products')}</Button>
        <Button primary onClick={''} >{t('home_nav_meals')}</Button>
        <Button primary onClick={''} >{t('home_nav_diets')}</Button>

        <Button primary onClick={userLogout} >{t('home_log_out')}</Button>

      </NavMenuWrapper>
    )
  }
};

const mapStateToProps = ({ }) => {
  //const { token } = user;
  return {};
};

export default reduxLang('home')(connect(mapStateToProps, { userLogout })(NavMenu));