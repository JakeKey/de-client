import {
  USER_SAVE_TOKEN
  
} from '../store/types';


export const loginSaveToken = (token) => (dispatch) => {
  const storeToken = async () => {
    console.log(">>> SAVING TOKEN: ", token);
    try {
     // await AsyncStorage.setItem('authToken', token)
    } catch (e) {
      // saving error
      console.warn(">>> ERROR SAVING TOKEN: ", e);
    }
  };

  storeToken();

  dispatch({
    type: USER_SAVE_TOKEN,
    payload: token
  });
};