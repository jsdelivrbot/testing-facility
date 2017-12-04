import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Search from './Search';

const Header = props => {
  return (
    <header className='bg-primary'>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <Link className="navbar-brand" to='/'>BitShow</Link>
        <Search />
      </nav>
    </header>
  );
};

Header.propTypes = {

};

export default Header;