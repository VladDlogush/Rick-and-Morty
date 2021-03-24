import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCharactersOperation } from '../redux/characters/charactersOperations';
import {
  setCharactersByCurrentPage,
  setCurrentPage,
} from '../redux/characters/charactersActions';
import {
  getCharactersData,
  getCurrentPage,
  getCharactersPerPage,
} from '../selectors';

const Pagination = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => getCharactersData(state));
  const currentPage = useSelector(state => getCurrentPage(state));
  const charactersPerPage = useSelector(state => getCharactersPerPage(state));

  const pageNumbers = [];
  console.log(characters);

  // Get current posts
  const indexOfLastPost = currentPage * charactersPerPage;
  const indexOfFirstPost = indexOfLastPost - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(getCharactersOperation());
  }, []);

  useEffect(() => {
    dispatch(setCharactersByCurrentPage(currentCharacters));
  });

  // Change page
  const paginate = pageNumber => dispatch(setCurrentPage(pageNumber));

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(characters.length / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <NavLink
              to="/characters"
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </NavLink>
            {/* сделать в отображение page в URL */}
            {/* <a
              }
              href="!#"
              className="page-link"
            ></a> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
