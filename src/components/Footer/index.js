import React from 'react';
import logo from '../../../src/img/logo-white.png';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
    </div>
        <div className='footer__connectInfo'>
          <div>г. Москва, Цветной б-р, 40</div>
          <div>+7 495 771 21 11</div>
          <div>info@skan.ru</div>
          <p>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
