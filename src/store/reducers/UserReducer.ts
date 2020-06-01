/* eslint-disable no-magic-numbers */
import { notificationTypes } from "utils/constants";

import {
  ActionTypes,
  Actions,
  UserDataType,
  NotificationsListTypes
} from "../types";

export interface UserState {
  userdata: UserDataType | null;
  notifications: NotificationsListTypes[];
}

export const INITIAL_STATE: UserState = {
  userdata: null,
  notifications: []
};

export default (state = INITIAL_STATE, action: Actions): UserState => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        userdata: action.payload,
        notifications: [
          ...state.notifications,
          {
            notification: { type: notificationTypes.success, code: "LOGIN" },
            id: state.notifications[state.notifications.length - 1]?.id + 1
          }
        ]
      };
    case ActionTypes.USER_REGISTER:
      return {
        ...state,
        userdata: action.payload
      };
    case ActionTypes.SET_NOTIFICATION_CODE:
      return {
        ...state,
        notifications: action.payload
          ? [
              ...state.notifications,
              {
                notification: action.payload,
                id: state.notifications[state.notifications.length - 1]?.id + 1
              }
            ]
          : state.notifications.slice(1)
      };
    case ActionTypes.USER_LOGOUT:
      return {
        ...INITIAL_STATE,
        notifications: [
          ...state.notifications,
          {
            notification: { type: notificationTypes.success, code: "LOGOUT" },
            id: state.notifications[state.notifications.length - 1]?.id + 1
          }
        ]
      };
    default:
      return state;
  }
};
