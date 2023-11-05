import React from 'react';
import logo from '../../img/logo.png';
import AccountBeforeAuthorization from './AccountBeforeAuthorization';
import AccountAfterAuthorization from './AccountAfterAuthorization';
import NavBar from './NavBar';
import BurgerMenu from './BurgerMenu';
import { useSelector } from 'react-redux';

function Header() {
  const accountInfo = useSelector((state)=>state.profile.companyInfo);
  const AccountElement = accountInfo ? AccountAfterAuthorization : AccountBeforeAuthorization
  return (
    <header className='header'>
      <div className='header__wrapper'>
      <div className='logo'>
        <a href="/">
        <img src={logo} alt='logo'/>
        </a>
    </div>
        <NavBar />
        <AccountElement />
        <BurgerMenu />
      </div>  
    </header>
  )
}

export default Header
