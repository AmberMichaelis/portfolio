/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCards.css';
import '../index.css';
import spaceVideo from '../assests/space.mp4';

const BlogCards = () => {
  return (
    <>
      <video autoPlay loop muted id='componentVideo'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className='blog'>
        <div className='card-container'>
          <div className='card'>
            <h3>- Just For Fun -</h3>
            <span className='bar'></span>
            <p className='card-title'>Games</p>
            <p>- Frogger -</p>
            <p>- Pacman -</p>
            <p>- Snake -</p>
            <p>- Adventure Island -</p>
            <Link to='/contact' className='btn'>
              See More...
            </Link>
          </div>
          <div className='card'>
            <h3>- Sites & Blogs -</h3>
            <span className='bar'></span>
            <p className='card-title'>Websites</p>
            <p>- Professional -</p>
            <p>- Personal -</p>
            <p>- Commerce -</p>
            <p>- Organizations -</p>
            <Link to='/contact' className='btn'>
              See more...
            </Link>
          </div>
          <div className='card'>
            <h3>- Useful Creations -</h3>
            <span className='bar'></span>
            <p className='card-title'>Apps</p>
            <p>- Price Watcher -</p>
            <p>- Data Scraper -</p>
            <p>- To Do Scheduler -</p>
            <p>- Employee Database -</p>
            <Link to='/contact' className='btn'>
              See More...
            </Link>
          </div>
          <Link to='/contact'>
            <button className='btn'>Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
