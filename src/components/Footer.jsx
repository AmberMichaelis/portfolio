/** @format */

import React from 'react';
import './Footer.css';
import {
  FaGithub,
  FaLinkedin,
  FaSearchLocation,
  FaFile,
  FaPaperPlane,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='footer-location info'>
            <h3>
              <FaSearchLocation className='icon' />
              USA
            </h3>
          </div>
          <div className='footer-resume info'>
            <Link to="/resume">
            <h4>
              <FaFile className='icon' />
              Resume
            </h4>
            </Link>
          </div>
          <div className='footer-github info'>
            <a href="https://github.com/AmberMichaelis" target="_blank" rel="noreferrer">
            <h4>
              <FaGithub className='icon' />
              Github
            </h4>
            </a>
          </div>
          <div className='footer-linkedin info'>
          <a href="https://www.linkedin.com/in/ambermichaelis/" target="_blank" rel="noreferrer">
            <h4>
              <FaLinkedin className='icon' />
              LinkedIn
            </h4>
            </a>
          </div>
          <div className='footer-email info'>
          <a href="mailto:amberm31@protonmail.com?subject=Development Inquiry" target="_blank" rel="noreferrer">
            <h4>
              <FaPaperPlane className='icon' />
              Email
            </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
