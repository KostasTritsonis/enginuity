import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const {t,i18n} = useTranslation();
    
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>{t("Send us a message")}</h3>
            <p>{t("CText")}</p>
            <ul>
                <li> <img src={mail_icon} alt="" />test@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+30</li>
                <li> <img src={location_icon} alt="" />{t("Krieza Aliveriou 34500")}</li>
            </ul>
        </div>
        <div className="contact-col2">
            <form>
                <label>{t("Your Name")}</label>
                <input type="text" name='name' placeholder={t('Enter your name')} required/>
                <label>{t("Phone Number")}</label>
                <input type="text" name='phone' placeholder={t('Enter your mobile number')} required/>
                <label>{t("Your Email")}</label>
                <input type="text" name='mail' placeholder={t('Enter your email')} required/>
                <label>{t("Write your messages here")}</label>
                <textarea name="message" rows="6" placeholder={t('Enter your message')} required></textarea>
                <button type='submit' className='btn dark-btn'>{t("Sumbit")}<img src={white_arrow} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact