import React, { Component } from 'react';
import { connect } from 'react-redux';
import reduxLang from '../middleware/lang';
import { Button } from '../components/inputs';
import { userLogout } from '../actions';

import {
  Route,
  Link
} from "react-router-dom";

class Dashboard extends Component {
  

  render() {
    const { t, userLogout } = this.props;
    return (
      <div >
        Dashboard <br />
        <Button primary onClick={userLogout} >{t('home_log_out')}</Button>
      </div>
    )
  }
};

const mapStateToProps = ({ }) => {
  //const { token } = user;
  return {};
};

export default reduxLang('home')(connect(mapStateToProps, { userLogout })(Dashboard));