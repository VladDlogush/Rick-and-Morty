import { fetchUsers } from '../../services/user-api';
import { getRandomUserFunc } from '../../utils';
import {
  getRandomUserSuccess,
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
  getUsersFulfill,
} from './usersActions';

export const getRandomUser = usersList => dispatch => {
  dispatch(getRandomUserSuccess(usersList[0]));
  setInterval(() => {
    const randomUser = getRandomUserFunc(usersList);
    dispatch(getRandomUserSuccess(randomUser));
  }, 8000);
};

export const getUsersTrigger = () => dispatch => {
  dispatch(getUsersRequest());
  fetchUsers()
    .then(({ data }) => {
      dispatch(getUsersSuccess(data));
      dispatch(getRandomUser(data));
    })
    .catch(error => dispatch(getUsersFailure(error)))
    .finally(() => dispatch(getUsersFulfill()));
};
