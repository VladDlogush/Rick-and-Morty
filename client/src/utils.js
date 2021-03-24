export const getFilteredCharacter = (match, charactersData) => {
  const { characterId } = match.params;

  const filteredCharacter = charactersData.find(
    personage => personage.id === Number(characterId),
  );

  return filteredCharacter;
};

export const getNewTaskList = (id, todos) => {
  const element = todos.findIndex(elem => elem.id === id);

  const newTaskList = [...todos];

  newTaskList[element] = {
    ...newTaskList[element],
    isCompleted: true,
  };

  return newTaskList;
};

export const getTaskDetails = todo => {
  const taskDetails = {
    id: Math.floor(Math.random() * 1000),
    value: todo,
    isCompleted: false,
  };

  return taskDetails;
};
