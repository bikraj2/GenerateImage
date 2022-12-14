import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1>GenerateImage</h1>
      <ul className='nav-links'>
        <li>
          <Link to='/' className='home'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/history' className='History'>
            History
          </Link>
        </li>
      </ul>
        <Link to='/register' >
          Register
        </Link>
    </nav>
  );
}
