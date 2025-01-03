import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'
import greek from '../../assets/greek.png'
import english from '../../assets/english.png'

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

  const [flag,setflag] = useState(true);

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`} >
        <img src={logo} alt="" className='logo' />
        <p>MATINA MAKRYGIANNI</p>
        <ul className={mobileMenu ?'':'hide-mobile-menu'}>
            <li><button onClick={() => setflag(!flag)}><img src={flag ? english : greek} alt="" /></button></li>
            <li><Link href='#hero' to='hero' smooth={true} offset={0} duration={500}></Link></li>
            <li><Link href='#programs' to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link href='#about' to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link href='#contact' to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
            
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}


export default Navbar