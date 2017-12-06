import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

const Header = props => {

  return (
    <header className=''>
      <nav className="navbar navbar-light justify-content-between">
        <div className='container'>
          <Link className="navbar-brand" to='/'>BitShow</Link>
          <Search />
        </div>
      </nav>
    </header>
  );
};


export default Header;