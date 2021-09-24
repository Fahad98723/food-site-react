import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className = 'search-section'>
            <h2>Search Your Food</h2>
            <input type="text" className='search-field' />
        </div>
    );
};

export default Header;