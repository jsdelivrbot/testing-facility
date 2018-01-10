import { combineReducers } from 'redux';
import authors from './authors_reducer';
import search from './search_reducer';

const rootReducer = combineReducers({
  authors,
  search
});

export default rootReducer;
