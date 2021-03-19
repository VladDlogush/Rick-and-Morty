import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersOperation } from '../redux/characters/charactersOperation';
import { getCurrentCharacters } from '../selectors';

const CharacterList = ({ match }) => {
  const dispatch = useDispatch();

  const characters = useSelector(state => getCurrentCharacters(state));

  useEffect(() => {
    dispatch(getCharactersOperation());
  }, []);

  return (
    <div>
      <ul className="list-group mb-4">
        {characters &&
          characters.map(character => (
            <li key={character.id} className="list-group-item">
              <p>Species: {character.species}</p>
              <p>Status: {character.status}</p>
              <p>Gender: {character.gender}</p>
              <Link
                to={{
                  pathname: `${match.path}/${character.id}`,
                }}
              >
                <img src={character.image} alt="character" />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

CharacterList.defaultProps = {
  match: {},
};

CharacterList.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(CharacterList);
