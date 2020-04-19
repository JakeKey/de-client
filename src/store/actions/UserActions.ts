import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { REACT_APP_API_URL, AUTH_ROUTE, USER_ROUTE } from "config";
import { ActionTypes } from "../types";
import { RootState } from "../reducers";

export const userLogin = (
  username: string,
  password: string
): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
  try {
    axios
      .post(REACT_APP_API_URL + AUTH_ROUTE, {
        username,
        password
      })
      .then(({ headers, data }) => {
        saveToken(headers["x-auth-token"]);
        dispatch({
          type: ActionTypes.USER_LOGIN,
          payload: {
            token: headers["x-auth-token"],
            id: data.id,
            username: data.username
          }
        });
      });
  } catch (err) {
    console.log("Login Error: ", err);
  }
};

export const userRegister = (
  username: string,
  password: string
): ThunkAction<void, RootState, unknown, Action<string>> => dispatch =>
  axios
    .post(REACT_APP_API_URL + USER_ROUTE, {
      username,
      password
    })
    .then(
      ({ headers, data }) => {
        saveToken(headers["x-auth-token"]);
        dispatch({
          type: ActionTypes.USER_REGISTER,
          payload: {
            token: headers["x-auth-token"],
            id: data.id,
            username: data.username
          }
        });
      },
      err => {
        console.log("Register Error: ", err);
      }
    );

export const userLogout = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => dispatch => {
  const removeToken = async () => {
    try {
      await localStorage.removeItem("authToken");
      dispatch({
        type: ActionTypes.USER_LOGOUT
      });
    } catch (e) {
      console.log("Error removing token: ", e);
    }
  };
  return removeToken();
};

const saveToken = async (token: string) => {
  try {
    await localStorage.setItem("authToken", token);
  } catch (e) {
    console.log("Error saving token: ", e);
  }
};
