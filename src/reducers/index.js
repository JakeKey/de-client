import { combineReducers } from 'redux'
import { langReducer } from 'redux-lang'
import UserReducer from './UserReducer';


export default combineReducers({
  user: UserReducer,
  locale: langReducer('en')
})
