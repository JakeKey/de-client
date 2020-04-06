import { ActionTypes, Actions, UserDataType } from "../types";

export interface UserState {
  userdata: UserDataType | null;
}

const INITIAL_STATE: UserState = {
  userdata: null
};

export default (state = INITIAL_STATE, action: Actions): UserState => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        userdata: action.payload
      };
    case ActionTypes.USER_REGISTER:
      return {
        ...state,
        userdata: action.payload
      };
    case ActionTypes.USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
