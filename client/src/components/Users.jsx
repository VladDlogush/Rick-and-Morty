import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { getUsersTrigger } from '../redux/users/usersOperation';
import {
  getIsLoadingUserList,
  getRandomUser,
  getCurrentUsers,
} from '../selectors';

const Users = () => {
  const dispatch = useDispatch();

  const isLoadingUserList = useSelector(state => getIsLoadingUserList(state));
  const randomUser = useSelector(state => getRandomUser(state));
  const currentUsers = useSelector(state => getCurrentUsers(state));

  useEffect(() => {
    dispatch(getUsersTrigger());
  }, []);

  if (isLoadingUserList) {
    return <Loader />;
  }

  return (
    <div>
      <h2>{`Random user: ${randomUser}`}</h2>
      <ul className="list-group mb-4">
        {currentUsers &&
          currentUsers.map(user => (
            <li key={user.id} className="list-group-item">
              <p>Name: {user.name}</p>
              <p>Surname: {user.surname}</p>
              <p>Description: {user.desc}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
