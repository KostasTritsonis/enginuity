import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import { useTranslation } from 'react-i18next'


const About = () => {


  const {t,i18n} = useTranslation();

  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>{t("ABOUT US")}</h3>
        <h2>{t("A")}</h2>
        <p>{t("AText")}</p>
        <p>{t("AText2")}</p>
        <p>{t("AText3")}</p>
      </div>
    </div>
  )
}

export default About