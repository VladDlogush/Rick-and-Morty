export const ActionMyWatchList = {
  SET_TODO: 'SET_TODO',
  SET_TODOS: 'SET_TODOS',
};

export const setTodo = payload => ({
  type: ActionMyWatchList.SET_TODO,
  payload,
});

export const setTodos = payload => ({
  type: ActionMyWatchList.SET_TODOS,
  payload,
});
