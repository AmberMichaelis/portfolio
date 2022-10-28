/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaTimes,
} from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          {' '}
          <div className='social'>
            <FaGithub
            className='icons'
              size={30}
              style={{ color: 'white', marginRight: '1rem' }}
            />
            <FaLinkedin
            className='icons'
              size={30}
              style={{ color: 'white', marginRight: '1rem' }}
            />
            <FaPaperPlane
            className='icons'
              size={30}
              style={{ color: 'white', marginRight: '1rem' }}
            />
          </div>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: 'white' }} />
        ) : (
          <FaBars size={20} style={{ color: 'white' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
