import * as API from '../../services/Api';
import {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersFailure,
  getCharactersFulfill,
  setCharacter,
} from './charactersActions';
import { getFilteredCharacter } from '../../utils';

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

  const filteredCharacter = getFilteredCharacter(match, charactersData);
  dispatch(setCharacter(filteredCharacter));
};
