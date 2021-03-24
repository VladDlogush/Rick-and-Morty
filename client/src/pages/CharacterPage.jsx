import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCharactersOperation,
  setCharacterOperation,
} from '../redux/characters/charactersOperations';
import Character from '../components/Characters/Character';
import { getCharacter } from '../selectors';

const CharacterPage = ({ match, history }) => {
  const dispatch = useDispatch();

  const character = useSelector(state => getCharacter(state));

  useEffect(() => {
    dispatch(getCharactersOperation());
    dispatch(setCharacterOperation(match));
  }, []);

  const handleGoback = () => history.push('/characters');

  return (
    <>
      {character && (
        <Character character={character} handleGoback={handleGoback} />
      )}
    </>
  );
};

CharacterPage.defaultProps = {
  history: {},
  match: {},
};

CharacterPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
};

export default CharacterPage;
