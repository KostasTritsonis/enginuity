import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const {t,i18n} = useTranslation();

  return (
    <div className='footer'>
        <p>{t("© 2025 Matina Makrygianni. All rights reserved.")}</p>
    </div>
  )
}

export default Footer