import {
  USER_LOGIN,
  USER_REGISTER
} from '../store/types';

const INITIAL_STATE = {
  token: null
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload
      };
    case USER_REGISTER:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state
  }
}