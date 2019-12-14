import { API_URL, AUTH_ROUTE, USER_ROUTE } from '../config';
import {
  USER_LOGIN,
  USER_REGISTER
} from '../store/types';
const axios = require('axios');

export const userLogin = (username, password) => (dispatch) => {
  const saveToken = async (token) => {
    try {
      await localStorage.setItem('authToken', token);
    } catch (e) {
      console.log('Error saving token: ', e);
    }
    dispatch({
      type: USER_LOGIN,
      payload: token
    });
  };

  return (
    axios.post(API_URL + AUTH_ROUTE, {
      username, password
    })
      .then(({ data }) => {
        saveToken(data);
      })
      .catch(err => {
        console.log('Login Error: ', err)
      })
  );
};

export const userRegister = (username, password) => (dispatch) => {
  const saveToken = async (token) => {
    try {
      await localStorage.setItem('authToken', token);
    } catch (e) {
      console.log('Error saving token: ', e);
    }
    dispatch({
      type: USER_REGISTER,
      payload: token
    });
  };

  return (
    axios.post(API_URL + USER_ROUTE, {
      username, password
    })
      .then(({headers}) => {
        saveToken(headers['x-auth-token']);
      })
      .catch(err => {
        console.log('Register Error: ', err)
      })
  );
};