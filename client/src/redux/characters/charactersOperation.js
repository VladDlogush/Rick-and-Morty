import * as API from '../../services/Api';
import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure,
  getCharactersFulfill,
  setCharacter,
} from './charactersActions';

// eslint-disable-next-line import/prefer-default-export
export const getCharactersOperation = () => dispatch => {
  dispatch(getCharactersRequest());
  API.fetchCharacters()
    .then(({ data }) => {
      dispatch(getCharactersSuccess(data.results));
    })
    .catch(error => dispatch(getCharactersFailure(error)))
    .finally(() => dispatch(getCharactersFulfill()));
};

export const setCharacterOperation = match => (dispatch, getState) => {
  const { charactersData } = getState();
  const { characterId } = match.params;

  const filteredCharacter = charactersData.find(
    personage => personage.id === Number(characterId),
  );

  dispatch(setCharacter(filteredCharacter));
};
