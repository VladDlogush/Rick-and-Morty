import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
// import usersReducer from './users/usersReducer';
import charactersReducer from './characters/charactersReducer';

const store = createStore(
  charactersReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
