import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/titleIcon.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

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

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`} >
        <img src={logo} alt="" className='logo' />
        <p>ENGINUITY</p>
        <ul className={mobileMenu ?'':'hide-mobile-menu'}>
            <li><Link href='#hero' to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link href='#programs' to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link href='#about' to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link href='#contact' to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}


export default Navbar