export enum ActionTypes {
  USER_LOGIN = "USER_LOGIN",
  USER_REGISTER = "USER_REGISTER",
  USER_LOGOUT = "USER_LOGOUT",
}

export interface UserDataType {
  id: number;
  username: string;
  token: string;
}

export type Actions =
  | { type: ActionTypes.USER_LOGIN; payload: UserDataType }
  | { type: ActionTypes.USER_REGISTER; payload: UserDataType }
  | { type: ActionTypes.USER_LOGOUT };
