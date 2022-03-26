import React from 'react';
import'./Header.css';
const Header = () => {
    return (
        <div>
            <nav className='header'>
            <h1>Food Shop</h1>
            <div>
                <a href="/shop">Home</a>
                <a href="/orders">Cart</a>
                <a href="/about">About</a>
            </div>
        </nav>
        </div>
    );
};

export default Header;