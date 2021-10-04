import { combineReducers } from 'redux';
import { contactsReducer } from './reducer';
// import { errorReducer } from './errorReducer';
// import { loaderReducer } from './loaderReducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  // error: errorReducer,
  // loader: loaderReducer,
}) 