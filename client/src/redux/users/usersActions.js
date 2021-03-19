export const ActionUsers = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  GET_USERS_FULFILL: 'GET_USERS_FULFILL',
  GET_RANDOM_USER_SUCCESS: 'GET_RANDOM_USER_SUCCESS',
  SET_USERS_LIST_BY_CURRENT_PAGE: 'SET_USERS_LIST_BY_CURRENT_PAGE',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
};

export const getUsersRequest = payload => ({
  type: ActionUsers.GET_USERS_REQUEST,
  payload,
});

export const getUsersSuccess = payload => ({
  type: ActionUsers.GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailure = payload => ({
  type: ActionUsers.GET_USERS_FAILURE,
  payload,
});

export const getUsersFulfill = payload => ({
  type: ActionUsers.GET_USERS_FULFILL,
  payload,
});

export const getRandomUserSuccess = ({ name, surname }) => ({
  type: ActionUsers.GET_RANDOM_USER_SUCCESS,
  payload: `${name} ${surname}`,
});

export const setUsersListByCurrentPage = payload => ({
  type: ActionUsers.SET_USERS_LIST_BY_CURRENT_PAGE,
  payload,
});

export const setCurrentPage = payload => ({
  type: ActionUsers.SET_CURRENT_PAGE,
  payload,
});
