import axios, { AxiosError } from "axios";
import { Action, CombinedState } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { REACT_APP_API_URL, AUTH_ROUTE, USER_ROUTE } from "config";
import { ErrorType, notificationTypes } from "utils/constants";

import { ActionTypes, NotificationsTypes, Actions } from "../types";
import { RootState } from "../reducers";
import { UserState } from "store/reducers/UserReducer";

export const userLogin = (
  username: string,
  password: string
): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
  axios
    .post(REACT_APP_API_URL + AUTH_ROUTE, {
      username,
      password
    })
    .then(({ headers, data }) => {
      saveToken(headers["x-auth-token"], dispatch);
      dispatch({
        type: ActionTypes.USER_LOGIN,
        payload: {
          token: headers["x-auth-token"],
          id: data.id,
          username: data.username
        }
      });
    })
    .catch((err: AxiosError<ErrorType>) =>
      dispatch({
        type: ActionTypes.SET_NOTIFICATION_CODE,
        payload: {
          code: err.response?.data.code,
          type: notificationTypes.error
        }
      })
    );
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
    .then(({ headers, data }) => {
      saveToken(headers["x-auth-token"], dispatch);
      dispatch({
        type: ActionTypes.USER_REGISTER,
        payload: {
          token: headers["x-auth-token"],
          id: data.id,
          username: data.username
        }
      });
    })
    .catch((err: AxiosError<ErrorType>) =>
      dispatch({
        type: ActionTypes.SET_NOTIFICATION_CODE,
        payload: {
          code: err.response?.data.code,
          type: notificationTypes.error
        }
      })
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
    } catch (err) {
      dispatch({
        type: ActionTypes.SET_NOTIFICATION_CODE,
        payload: {
          code: err?.code,
          type: notificationTypes.error
        }
      });
    }
  };
  return removeToken();
};

const saveToken = async (
  token: string,
  dispatch: ThunkDispatch<
    CombinedState<{
      user: UserState;
    }>,
    unknown,
    Action<string>
  >
) => {
  try {
    await localStorage.setItem("authToken", token);
  } catch (err) {
    dispatch({
      type: ActionTypes.SET_NOTIFICATION_CODE,
      payload: {
        code: err?.code,
        type: notificationTypes.error
      }
    });
  }
};

export const setNotification = (
  notification?: NotificationsTypes
): Actions => ({
  type: ActionTypes.SET_NOTIFICATION_CODE,
  payload: notification
});
