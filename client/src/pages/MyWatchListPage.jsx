import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoFilter from '../components/MyWatchList/ToDoFilter';
import ToDoList from '../components/MyWatchList/ToDoList';
import { getTodos } from '../selectors';
import { setTodos } from '../redux/myWatchList/myWatchListActions';

const MyWatchListPage = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => getTodos(state));

  useEffect(() => {
    const todosList = JSON.parse(localStorage.getItem('todos'));
    dispatch(setTodos(todosList));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <ToDoFilter />
      <br />
      <ToDoList />
    </div>
  );
};

export default MyWatchListPage;
