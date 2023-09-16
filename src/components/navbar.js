import React from 'react';
import Search_icon from '../assests/SVG/icons-search.svg';
// import Menu_icon from '../assests/SVG/menu-alt-4.svg';
// import logo from '../assests/images/tv.jpg';

export default function navbar() {
  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <div className='logo'></div>
            <div className='title'>
                <h1>MovieBox</h1>
            </div>
            
        </div>
        <div className='searchBar-container'>
            <input placeholder='What do you want to watch?' />
            <span className='search-icon' >
                <img src={Search_icon} className="search" alt="Search_icon" />

                
            </span>
        </div>
        <div className='menu-container'>
            {/* <img src={Auth_Menu} alt='logo' /> */}
            <div className='auth-wrapper' >
                <h4>Sign in</h4>
            </div>
            <div className='menu-wrapper' >
                <span className='menu-1'></span>
                <span className='menu-2'></span>
                {/* <img src={Menu_icon} className="menu" alt="Menu_icon" /> */}
            </div>
        </div>
    </div>
  )
}
