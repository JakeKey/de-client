import React, { Component } from 'react';
import { connect } from 'react-redux';
import reduxLang from '../middleware/lang';
import { Button } from '../components/inputs';
import { DashboardWrapper } from '../components/containers';
import { userLogout } from '../actions';
import NavMenu from './NavMenu';

import {
  Route,
  Link
} from "react-router-dom";

class Dashboard extends Component {
  

  render() {
    const { t } = this.props;
    return (
      <DashboardWrapper >
        <NavMenu />
        Dashboard <br />
      </DashboardWrapper>
    )
  }
};

const mapStateToProps = ({ }) => {
  //const { token } = user;
  return {};
};

export default reduxLang('home')(connect(mapStateToProps, { })(Dashboard));