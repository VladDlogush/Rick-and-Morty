import { ActionMyWatchList } from './myWatchListActions';

const initialState = {
  todo: '',
  todos: [],
};

const myWatchListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionMyWatchList.SET_TODO:
      return {
        ...state,
        todo: payload,
      };
    case ActionMyWatchList.SET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    default:
      return initialState;
  }
};

export default myWatchListReducer;
