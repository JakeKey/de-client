import {
  USER_SAVE_TOKEN,
} from '../store/types';

const INITIAL_STATE = {
  token: null
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SAVE_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state
  }
}