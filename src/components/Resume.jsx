/** @format */

import React from 'react';
import './Resume.css';
import '../index.css';
import spaceVideo from '../assests/space.mp4';

import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <>
      <video autoPlay loop muted id='componentVideo'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className='resume'>
        <div className='resume-left'>
          <h1>Resume</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            expedita consectetur voluptates hic adipisci doloribus nostrum
            quaerat nam ducimus magnam! Expedita, ex rem suscipit iusto corporis
            soluta hic consectetur cupiditate.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ab magnam eos amet praesentium! Totam, fugit laudantium commodi vel, quos accusamus numquam, ipsa quo laboriosam harum iure reiciendis illo magnam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit assumenda dicta rerum eaque possimus odio provident esse optio, amet asperiores molestiae alias labore deserunt debitis voluptatum perferendis aut. Esse, eaque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, ipsa corrupti. Officia, quasi tempore quibusdam tempora, ducimus aliquam odit asperiores accusamus quia repudiandae alias nemo harum officiis aliquid ratione quas?
          </p>
          <Link to='/contact'>
            <button className='btn'>Contact</button>
          </Link>
        </div>
        <div className='resume-right'>
          <div className='rightStuff'>
            <h1>Experience</h1>
            <p>
              rightStuff goes here. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel voluptatem explicabo excepturi eos eaque
              consequatur in. Unde possimus itaque corrupti voluptates voluptas
              enim inventore deleniti non adipisci ut, natus repellat.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ad repellendus enim ut laborum possimus quaerat, architecto eum culpa accusantium velit consequatur reprehenderit consequuntur nam ipsam tempore labore excepturi voluptatum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt possimus enim unde earum minima officiis laudantium facilis? Adipisci perferendis earum dolor voluptatum quae ipsam veniam dolorum. Voluptatem, nostrum alias.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nam rem quam! Nesciunt ab rem odit, nulla rerum quo facilis aperiam pariatur et! Illo, voluptate aperiam. Nostrum itaque optio hic.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
