import React, { Component } from 'react'
import './ContactForm.css'
import '../index.css';
import spaceVideo from '../assests/space.mp4';

export class ContactForm extends Component {
  render() {
    return (
      <>
      <video autoPlay loop muted id='componentVideo'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="subject" />
            <label>Details</label>
            <textarea rows='6' />
            <button className='btn'>Submit</button>
        </form>
      </div>
      </>
    )
  }
}

export default ContactForm
