import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../../redux/myWatchList/myWatchListActions';
import { setTaskOperation } from '../../redux/myWatchList/myWatchListOperations';
import { getTodos } from '../../selectors';

const ToDoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => getTodos(state));

  const deletetask = (e, id) => {
    e.preventDefault();
    dispatch(setTodos(todos.filter(t => t.id !== id)));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    dispatch(setTaskOperation(id));
  };

  console.log(todos);
  return todos !== [] ? (
    <ul>
      {todos.map(t => (
        <li
          key={t.id}
          style={{
            textDecoration: t.isCompleted ? 'line-through' : 'none',
          }}
        >
          {t.value}
          <button
            type="button"
            className="completed"
            onClick={e => taskCompleted(e, t.id)}
          >
            Completed
          </button>

          <button
            type="button"
            className="delete"
            onClick={e => deletetask(e, t.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : null;
};

export default ToDoList;
