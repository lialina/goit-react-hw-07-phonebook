import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { contactsReducer } from './reducer';
// import { phoneBook } from './reducer';
import thunk from "redux-thunk";
import { rootReducer } from './rootReducer'

const middlewares = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export const store = createStore(phoneBook, devToolsEnhancer());

// contactsReducer при использовании switch
// или phoneBook вместо contactsReducer после настройки handlers
