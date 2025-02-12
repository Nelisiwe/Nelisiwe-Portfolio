import React from 'react';
import './footer.css';

// Define the Footer component.
const Footer = () => {
  // Returns a footer with the copyright information.
  return (
    <footer className="footer">
      <div className="footer_separator">
        <div className='footer_title'>   
        {/* This is the copyright information. It displays the current year and the name of the copyright holder. */}
        <span>&copy; {new Date().getFullYear()} Nelisiwe Gumede. All rights reserved.</span>
      </div>   
      </div>  
    </footer>
  );
};

export default Footer;
