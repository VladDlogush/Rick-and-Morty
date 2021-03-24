import { setTodos } from './myWatchListActions';
import { getNewTaskList, getTaskDetails } from '../../utils';

export const setTaskOperation = id => (dispatch, getState) => {
  const { todos } = getState();

  const newTaskList = getNewTaskList(id, todos);
  dispatch(setTodos(newTaskList));
};

export const setAddTaskOperation = () => (dispatch, getState) => {
  const { todos, todo } = getState();

  const taskDetails = getTaskDetails(todo);
  if (todo !== '') {
    dispatch(setTodos([...todos, taskDetails]));
  }
};
