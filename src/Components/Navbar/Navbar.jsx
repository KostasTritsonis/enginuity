import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'
import greek from '../../assets/greek.png'
import english from '../../assets/english.png'
import "../../../translation";
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  
  const [sticky,setSticky] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu,setMobleMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu ? setMobleMenu(false) : setMobleMenu(true);
  } 

  const [flag,setflag] = useState("en");


  const {t,i18n} = useTranslation();


  useEffect(() =>{
    i18n.changeLanguage(flag)
  },[flag])


  const changeLang = () =>{
    flag==="en" ? setflag("gr") : setflag("en");
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`} >
        <img src={logo} alt="" className='logo' />
        <p>{t("MATINA MAKRYGIANNI")}</p>
        <ul className={mobileMenu ?'':'hide-mobile-menu'}>
            <li><button id="language" onClick={changeLang}><img src={flag==="en" ? english : greek} alt="" /></button></li>
            <li><Link href='#hero' to='hero' smooth={true} offset={0} duration={500}>{t("Home")}</Link></li>
            <li><Link href='#programs' to='programs' smooth={true} offset={-260} duration={500}>{t("Program")}</Link></li>
            <li><Link href='#about' to='about' smooth={true} offset={-150} duration={500}>{t("About us")}</Link></li>
            <li><Link href='#contact' to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>{t("Contact us")}</button></Link></li>
            
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}


export default Navbar