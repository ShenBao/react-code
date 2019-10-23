import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <Link to='/'>Home</Link>
        {'  '}
        <Link to='/login'>Login</Link>
        <hr />
      </div>
    );
  };
  
  export default Header;

