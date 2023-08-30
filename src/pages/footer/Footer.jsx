import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_separator"></div>      
        <span>&copy; {new Date().getFullYear()} Nelisiwe Gumede. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
