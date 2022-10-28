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
        <div className='footer-left'>
          <div className='footer-location info'>
            <h4>
              <FaSearchLocation className='icon' />
              USA
            </h4>
          </div>
          <div className='footer-resume info'>
            <h4>
              <FaFile className='icon' />
              Resume
            </h4>
          </div>
          <div className='footer-github info'>
            <h4>
              <FaGithub className='icon' />
              Github
            </h4>
          </div>
          <div className='footer-linkedin info'>
            <h4>
              <FaLinkedin className='icon' />
              LinkedIn
            </h4>
          </div>
          <div className='footer-email info'>
            <h4>
              <FaPaperPlane className='icon' />
              Email
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
