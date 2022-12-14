/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';
import spaceVideo from '../assests/space.mp4';
import '../index.css';

const Video = () => {
  return (
    <div className='homeVideo'>
      <video autoPlay loop muted id='homeVideo'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className='homeVideoText'>
        <h1>Amber Michaelis</h1>
        <p>Full Stack Developer</p>
        <div>
          <Link to='/resume' className='btn'>
            Resume
          </Link>
          <a
            href='mailto:amberm31@protonmail.com?subject=Development Inquiry'
            target='_blank'
            rel='noreferrer'
            className='btn btn-light'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
