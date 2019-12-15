import {
  USER_LOGIN,
  USER_REGISTER,
  USER_LOGOUT
} from '../store/types';

const INITIAL_STATE = {
  userdata: null
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userdata: action.payload
      };
    case USER_REGISTER:
      return {
        ...state,
        userdata: action.payload
      };
    case USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state
  }
}