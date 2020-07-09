import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='logo'>
          <Link to='/'>
            {' '}
            <span>K</span>MS
          </Link>
        </li>
        <li className='search-icon'>
          <input type='search' placeholder='Search...' />
          <label className='icon'>
            <span className='fas fa-search'></span>
          </label>
        </li>
        <div className='items'>
          <li>
            <a href='#/'>בית</a>
          </li>
          <li>
            <a href='#/'>אודות</a>
          </li>
          <li>
            <a href='#/'>שירותים</a>
          </li>
          <li>
            <a href='#/'>צור קשר</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
