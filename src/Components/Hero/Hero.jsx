import React from 'react'
import './Hero.css'
import { useTranslation } from 'react-i18next'
const Hero = () => {

   const {t,i18n} = useTranslation();


  return (
    <>
    <div className='hero container'>
        <div className='hero-text'>
          <h1>{t("herotitle")}</h1>
            <p>{t("heropagr")}</p>
        </div>
        
    </div>
    <div className='quotes'>
      <p className='quote1'>Only the best is good enough</p>
      <p className='quote2'>Nothing is better than perfect</p>
      <p className='quote3'>Doorway to Learning</p>
      <p className='quote4'>Knowledge is Power</p>
    </div>
  </>
  )
}

export default Hero