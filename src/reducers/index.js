import { combineReducers } from 'redux';
import AuthReducer from './reducer_authenticate';

const rootReducer = combineReducers({
  isLoggedIn: AuthReducer
});

export default rootReducer;
