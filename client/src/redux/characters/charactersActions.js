export const ActionCharacters = {
  GET_CHARACTERS_REQUEST: 'GET_CHARACTERS_REQUEST',
  GET_CHARACTERS_SUCCESS: 'GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILURE: 'GET_CHARACTERS_FAILURE',
  GET_CHARACTERS_FULFILL: 'GET_CHARACTERS_FULFILL',
  SET_CHARACTERS_BY_CURRENT_PAGE: 'SET_CHARACTERS_BY_CURRENT_PAGE',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_CHARACTER: 'SET_CHARACTER',
};

export const getCharactersRequest = payload => ({
  type: ActionCharacters.GET_CHARACTERS_REQUEST,
  payload,
});

export const getCharactersSuccess = payload => ({
  type: ActionCharacters.GET_CHARACTERS_SUCCESS,
  payload,
});

export const getCharactersFailure = payload => ({
  type: ActionCharacters.GET_CHARACTERS_FAILURE,
  payload,
});

export const getCharactersFulfill = payload => ({
  type: ActionCharacters.GET_CHARACTERS_FULFILL,
  payload,
});

export const setCharactersByCurrentPage = payload => ({
  type: ActionCharacters.SET_CHARACTERS_BY_CURRENT_PAGE,
  payload,
});

export const setCurrentPage = payload => ({
  type: ActionCharacters.SET_CURRENT_PAGE,
  payload,
});

export const setCharacter = payload => ({
  type: ActionCharacters.SET_CHARACTER,
  payload,
});
