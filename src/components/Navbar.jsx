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

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100 && window.innerWidth > 1240) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-scroll' : 'header'}>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        {/* <li>
          <Link to='/blog'>Blog</Link>
        </li> */}
        {/* <li>
          <Link to='/contact'>Contact</Link>
        </li> */}
        <li>
          {' '}
          <div className='social'>
            <a
              href='https://github.com/AmberMichaelis'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub
                className='icons'
                size={30}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/ambermichaelis/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin
                className='icons'
                size={30}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </a>
            <a
              href='mailto:amberm31@protonmail.com?subject=Development Inquiry'
              target='_blank'
              rel='noreferrer'
            >
              <FaPaperPlane
                className='icons'
                size={30}
                style={{ color: 'white', marginRight: '1rem' }}
              />
            </a>
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
