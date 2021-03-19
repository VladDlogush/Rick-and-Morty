// eslint-disable-next-line import/prefer-default-export
export const getRandomUserFunc = usersList => {
  const userIndex = usersList.length - 1;
  const randomUserIndex = Math.floor(Math.random() * Math.floor(userIndex));
  return usersList[randomUserIndex];
};
