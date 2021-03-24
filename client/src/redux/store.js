import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import charactersReducer from './characters/charactersReducer';
import myWatchListReducer from './myWatchList/myWatchListReducer';

const rootReducer = combineReducers({
  charactersReducer,
  myWatchListReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
