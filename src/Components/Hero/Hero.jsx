import React from 'react'
import './Hero.css'
import { useTranslation } from 'react-i18next'
const Hero = () => {

   const {t,i18n} = useTranslation();


  return (
    <div className='hero container'>
        <div className='hero-text'>
          <h1>{t("herotitle")}</h1>
            <p>{t("heropagr")}</p>
        </div>
    </div>
  )
}

export default Hero