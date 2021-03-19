import { ActionUsers } from './usersActions';

const initialState = {
  usersList: [],
  isLoadingUserList: false,
  randomUser: '',
  currentUsers: [],
  currentPage: 1,
  usersPerPage: 5,
  error: '',
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionUsers.GET_USERS_REQUEST:
      return {
        ...state,
        isLoadingUserList: true,
      };
    case ActionUsers.GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: payload,
      };
    case ActionUsers.GET_USERS_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case ActionUsers.GET_USERS_FULFILL:
      return {
        ...state,
        isLoadingUserList: false,
      };
    case ActionUsers.GET_RANDOM_USER_SUCCESS:
      return {
        ...state,
        randomUser: payload,
      };
    case ActionUsers.SET_USERS_LIST_BY_CURRENT_PAGE:
      return {
        ...state,
        currentUsers: payload,
      };
    case ActionUsers.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return initialState;
  }
};

export default usersReducer;
