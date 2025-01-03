import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message </h3>
            <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are important
            to us as we strive to provide exceptional service to our community.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />test@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+30</li>
                <li> <img src={location_icon} alt="" />Krieza aliveriou 34500</li>
            </ul>
        </div>
        <div className="contact-col2">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your mobile nubmer' required/>
                <label>Your Email</label>
                <input type="text" name='mail' placeholder='Enter your email' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Sumbit now <img src={white_arrow} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact