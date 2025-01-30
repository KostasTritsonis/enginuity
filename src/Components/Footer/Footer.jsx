import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const {t,i18n} = useTranslation();

  return (
    <>
      <div className='footer'>
          <p>{t("© 2025 Matina Makrygianni. All rights reserved.")}</p>
      </div>
      <p className='footer2'>Designed by Konstantinos Tritsonis. Icons by Icons8</p>
    </>
    
  )
}

export default Footer