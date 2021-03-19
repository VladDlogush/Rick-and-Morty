import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
      <li>
        <NavLink to="/episodes">Episodes</NavLink>
      </li>
      <li>
        <NavLink to="/locations">Locations</NavLink>
      </li>
      <li>
        <NavLink to="/watch">My Watch List</NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
