import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import "./navbar.css";
import { useState } from 'react';

const Navbar = () => {
  // Declare a state variable to track whether the menu is open or closed.
  const [showMenu, setShowMenu] = useState(false);
  // Returns the navbar UI.
  return (
    <nav className='nav'>
       {/* The `nav_menu` class is used to style the navbar menu. */}
      <div className={`${showMenu ? 'nav_menu show-menu' : 'nav_menu'}`}>
        <ul className='nav_list'>
          {links.map(({ icon, path }, index) => {
            return (
              <li className='nav_item' key={index}>
              <NavLink to={path} className={({ isActive }) => 
              isActive ? 'nav_link active-nav' : 'nav_link'}
              onClick={() => setShowMenu(!showMenu)}
              >
                {icon}
                <h4 className='nav_item'></h4>
              </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* The `nav_toggle-manu` class is used to style the navbar toggle button. */}
      <div className='.nav_toggle-manu'>
        {/* The `span` elements are used to create the hamburger menu icon. */}
      <div className={`${showMenu ? 'nav_toggle animate-toggle' : 'nav_toggle'}`} onClick={() => setShowMenu(!showMenu)}> 
          <span></span>
          <span></span>
          <span></span>
      </div>
      </div>
    </nav>
  )
}

export default Navbar