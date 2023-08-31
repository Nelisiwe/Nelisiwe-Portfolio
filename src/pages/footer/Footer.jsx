import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_separator">
        <div className='footer_title'>   
        <span>&copy; {new Date().getFullYear()} Nelisiwe Gumede. All rights reserved.</span>
      </div>   
      </div>  
    </footer>
  );
};

export default Footer;
