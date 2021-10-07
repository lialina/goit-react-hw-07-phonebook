// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// // import { devToolsEnhancer } from 'redux-devtools-extension';

// const middlewares = [thunk];

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

import { configureStore } from '@reduxjs/toolkit';
// import thunk from "redux-thunk";
// import logger from 'logger';
// import { rootReducer } from './rootReducer';
import contactsReducerWithSlice from './slices/contactsSlice';
const rootReducer = {
  contacts: contactsReducerWithSlice,
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  // middleware: [thunk, logger],
})
