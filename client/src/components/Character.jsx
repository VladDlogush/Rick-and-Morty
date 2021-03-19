import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCharacter } from '../selectors';

const Character = ({ handleGoback }) => {
  const character = useSelector(state => getCharacter(state));

  return (
    <div>
      <button type="button" onClick={handleGoback}>
        Return
      </button>
      <h3>All about {character.name}</h3>
      <div>
        <div>
          <img src={character.image} alt="character" />
        </div>

        <div>
          <p>Species: {character.species}</p>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
        </div>
      </div>
    </div>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  handleGoback: PropTypes.func.isRequired,
};

export default Character;
