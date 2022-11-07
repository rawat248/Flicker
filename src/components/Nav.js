import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/mountain">Mountain</NavLink>
        </li>
        <li>
          <NavLink to="/beaches">Beaches</NavLink>
        </li>
        <li>
          <NavLink to="/birds">Birds</NavLink>
        </li>
        <li>
          <NavLink to="/food">Food</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
