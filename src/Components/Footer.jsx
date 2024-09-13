import React from 'react';
import digitalhouse from '../../public/images/DH.png';
import facebook from '../../public/images/ico-facebook.png';
import instagram from '../../public/images/ico-instagram.png';
import tiktok from '../../public/images/ico-tiktok.png';
import whatsapp from '../../public/images/ico-whatsapp.png';

const Footer = () => {
  return (
    <footer>
      <div className='footerLogo'>
        <p>Powered by</p>
        <img src={digitalhouse} alt='Digital House' />
      </div>
      <div className='footerIcons'>
        <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
        <a href="https://www.instagram.com"><img src={instagram} alt="Instagram" /></a>
        <a href="https://www.tiktok.com"><img src={tiktok} alt="TikTok" /></a>
        <a href="https://www.whatsapp.com"><img src={whatsapp} alt="WhatsApp" /></a>
      </div>
    </footer>
  );
};

export default Footer;
