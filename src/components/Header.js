import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={punkLogo} className="punkLogo" alt=""/>
            </div>

            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} className="" alt=""/>
                </div>
                <input type="text" className="searchInput" placeholder="Collection, item or user..." />
            </div>

            <div className="headerItems">

            </div>
        </div>
    );
};

export default Header;
