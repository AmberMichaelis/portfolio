/** @format */

import React from 'react';
import './Resume.css';
import '../index.css';
import spaceVideo from '../assests/space.mp4';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Resume = () => {
  return (
    <>
      <video autoPlay loop muted id='componentVideo'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className='resume resume__body'>
        <div className='resume__left'>
          <div className='profile__text'>
            <h2>
              Amber Michaelis <br />
              <span>Full Stack Developer</span>
            </h2>
          </div>

          <div className='resume__contact__info'>
            <h3 className='resume__contact__title'>Contact Info</h3>
            <ul>
              <a
                href='mailto:amberm31@protonmail.com?subject=Development Inquiry'
                target='_blank'
                rel='noreferrer'
                className='resume__contact__link'
              >
                <li>
                  <span class='resume__contact__icon'>
                    <FaPaperPlane className='icon' />
                  </span>
                  <span className='resume__contact__text'>
                    AmberM31@protonmail.com
                  </span>
                </li>
              </a>
              <a
                href='https://github.com/AmberMichaelis'
                target='_blank'
                rel='noreferrer'
                className='resume__contact__link'
              >
                <li>
                  <span class='resume__contact__icon'>
                    <FaGithub className='icon' />
                  </span>
                  <span className='resume__contact__text'>
                    GitHub.com/AmberMichaelis
                  </span>
                </li>
              </a>
              <a
                href='https://www.linkedin.com/in/ambermichaelis/'
                target='_blank'
                rel='noreferrer'
                className='resume__contact__link'
              >
                <li>
                  <span class='resume__contact__icon'>
                    <FaLinkedin className='icon' />
                  </span>
                  <span className='resume__contact__text'>
                    LinkedIn.com/AmberMichaelis
                  </span>
                </li>
              </a>
            </ul>
          </div>

          <div className='resume__contact__info resume__education'>
            <h3 className='resume__contact__title'>Education</h3>
            <ul>
              <li>
                <h5>2012 - 2017</h5>
                <h4>BS Chemical Engineering</h4>
                <h6>Minors: Math, Biology, Chemistry</h6>
                <h4>McNeese State University</h4>
              </li>
              <li>
                <h5>Coming Soon</h5>
                <h4>MS Artificial Intelligence</h4>
                <h4>University of Texas</h4>
              </li>
              <li className='professional__certificates'>
                <h5>More In Progress...</h5>
                <h4>4 Professional Certificates</h4>
                <h6>
                  Advanced Data Sturctures & Algorithms <br />
                </h6>
                <h4>Georgia Institute of Technology</h4>
              </li>
            </ul>
          </div>

          <div className='resume__contact__info resume__projects flip'>
            <a
              href='https://github.com/AmberMichaelis'
              target='_blank'
              rel='noreferrer'
              className='resume__projects__button'
              data-back='Click Me (Just for Fun)'
              data-front='Check Out My GitHub'
            >
              {' '}
            </a>
          </div>
          <div className='resume__contact__info resume__projects flip'>
            <a
              href='https://www.krustykrab.us/projects.html'
              target='_blank'
              rel='noreferrer'
              className='resume__projects__button'
              data-back='Click Me (Just for Fun)'
              data-front='Personal Projects'
            >
              {' '}
            </a>
          </div>
        </div>
        <div className='resume__right'>
          <div className='rightStuff'>
            <div className='resume__about'>
              <h2 className='resume__about__title'>Profile</h2>
              <p>
                3 years of full stack development experience. 5 years working
                remotely.
                <br /> React, Node, Next.js, Redux, MySQL, AWS, MongoDB, Docker,
                and more...
                <br />
                Scored in the top 5% of 2.2M people on LinkedIn JavaScript
                assessment.
                <br />
                <br />
                Currently working on Amazon Web Services Developer
                Certifications.
                <br />
                Enjoy being in nature and reading.
              </p>
            </div>
            <div className='resume__about'>
              <h2 className='resume__about__title'>Experience</h2>
              <div className='resume__experience__box'>
                <div className='resume__experience__year__company'>
                  <h5>2021 - Present</h5>
                  <h5>Self-Employed</h5>
                  <h5 className='resume__experience__location'>
                    Remote USA/Europe
                  </h5>
                </div>
                <div className='resume__experience__text'>
                  <h4>Lead Full Stack Developer</h4>
                  <p>
                    Various CRUD projects typically using MERN or similar stack.
                    Projects include cryptocurrency blockchain design, US
                    Department of Transportation internal project sites, drone
                    aerial footage processing, and cybersecurity integration for
                    global search and rescue flights, and non-profit website
                    development for an international orphanage.
                    <br />
                    <br />
                    Consultation with end-users, development team, and
                    implementation of a technical design that meets business
                    needs and execution.
                  </p>
                </div>
              </div>
              <div className='resume__experience__box'>
                <div className='resume__experience__year__company'>
                  <h5>2018 - 2021</h5>
                  <h5>Lumberton & Bryan High School</h5>
                  <h5 className='resume__experience__location'>
                    Remote/Texas, USA
                  </h5>
                </div>
                <div className='resume__experience__text'>
                  <h4>Engineering, Physics, Math Instructor</h4>
                  <p>
                    Experience working remotely. Introduction into programming
                    with Python and Scratch. Calculus-Based AP Physics, Math,
                    Chemistry, and Finance.
                  </p>
                </div>
              </div>
            </div>

            <div className='resume__about resume__skills'>
              <h2 className='resume__about__title'>Professional Skills</h2>
              <div className='resume__experience__box'>
                <h4>
                  <i className='fab fa-js'></i>
                  JavaScript
                </h4>
                <div className='resume__languages__percent'>
                  <div style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className='resume__experience__box'>
                <h4>
                  <i className='fab fa-react'></i>
                  Node
                </h4>
                <div className='resume__languages__percent'>
                  <div style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className='resume__experience__box'>
                <h4>
                  <i className='fab fa-node-js'></i>
                  React
                </h4>
                <div className='resume__languages__percent'>
                  <div style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className='resume__experience__box'>
                <h4>
                  <i className='fab fa-java'></i>
                  Java
                </h4>
                <div className='resume__languages__percent'>
                  <div style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className='resume__experience__box'>
                <h4>
                  <i className='fab fa-git-alt'></i>
                  Ruby
                </h4>
                <div className='resume__languages__percent'>
                  <div style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className='resume__experience__box'>
                <h4>
                  <i className='fas fa-database'></i>
                  MySQL
                </h4>
                <div className='resume__languages__percent'>
                  <div style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
