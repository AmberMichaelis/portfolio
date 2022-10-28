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

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location info'>
            <h4>
              <FaSearchLocation
                className='icon'
              />
              USA
            </h4>
          </div>
          <div className='resume info'>
            <h4>
              <FaFile
                className='icon'
              />
              Resume
            </h4>
          </div>
          <div className='github info'>
            <h4>
              <FaGithub
                className='icon'
              />
              Github
            </h4>
          </div>
          <div className='linkedin info'>
            <h4>
              <FaLinkedin
                className='icon'
              />
              LinkedIn
            </h4>
          </div>
          <div className='email info'>
            <h4>
              <FaPaperPlane
                className='icon'
              />
              Email
            </h4>
          </div>
        </div>
        <div className='right'>
          <ul className='skills'>
            <h4>JavaScript</h4>
            <h4>Node</h4>
            <h4>React</h4>
            <h4>Java</h4>
            <h4>SQL</h4>
            <h4>Git</h4>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
