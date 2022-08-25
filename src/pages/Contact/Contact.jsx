import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Contact() {

  return (
    <div className='flex_contact'>
      <div className='row'>
          <div className='info'>
            <div className='center'>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className='center'>
              <p>Adresse:</p> 
            </div>
          </div>
          <div className='info'>
          <div className='center'>
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className='center'>
            <p>Telephone:</p>
          </div>

          </div>
          <div className='info'>
          <div className='center'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
          <div className='center'>
            <p>Email:</p>
          </div>
            
          </div>
      </div>


      <div className='row' id='content'>
        <div>
          <h2>Nous contacter</h2>

          <div className='row'>
            <div className='right'>
              <h4>Nom</h4>
              <input type="text" placeholder='nom' />
            </div>
            <div className='left'>
              <h4>Email</h4>
              <input type="text" placeholder='email' />
            </div>
          </div>

          <h4>Sujet</h4>
            <input type="text" className='subject' placeholder='Sujet' />
          <h4>Message</h4>
            <textarea id="message" name="message" placeholder="Message..." required></textarea> <br /><br />
          <Link to={'/'}>
            <input className='sub_button'  type="submit" />
          </Link>
        </div>
      </div>
    </div>
  )
}
