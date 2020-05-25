import { NotificationType } from "utils/constants";

export enum ActionTypes {
  USER_LOGIN = "USER_LOGIN",
  USER_REGISTER = "USER_REGISTER",
  USER_LOGOUT = "USER_LOGOUT",
  SET_NOTIFICATION_CODE = "SET_NOTIFICATION_CODE"
}

export interface UserDataType {
  id: number;
  username: string;
  token: string;
}

export interface NotificationsTypes {
  type: NotificationType;
  code?: string;
}

export interface NotificationsListTypes {
  id: number;
  notification: NotificationsTypes;
}

export type Actions =
  | { type: ActionTypes.USER_LOGIN; payload: UserDataType }
  | { type: ActionTypes.USER_REGISTER; payload: UserDataType }
  | { type: ActionTypes.USER_LOGOUT }
  | {
      type: ActionTypes.SET_NOTIFICATION_CODE;
      payload?: NotificationsTypes;
    };
