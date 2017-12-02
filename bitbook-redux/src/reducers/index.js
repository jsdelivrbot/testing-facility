import { combineReducers } from 'redux';
import { form } from './form';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  form
});

export default rootReducer;
