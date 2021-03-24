import React from 'react';
import { useDispatch } from 'react-redux';
import { setTodo } from '../../redux/myWatchList/myWatchListActions';
import { setAddTaskOperation } from '../../redux/myWatchList/myWatchListOperations';

const ToDoFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setTodo(e.target.value));
  };

  const AddTask = () => {
    dispatch(setAddTaskOperation());
  };
  return (
    <>
      <input
        type="text"
        name="text"
        id="text"
        onChange={e => handleChange(e)}
        placeholder="Add todo here..."
      />
      <button type="button" className="add-btn" onClick={AddTask}>
        Add
      </button>
    </>
  );
};

export default ToDoFilter;
