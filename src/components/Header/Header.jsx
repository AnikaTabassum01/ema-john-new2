import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
                <Link to="/orders">Orders</Link>
                <Link to="/">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Log in</Link>
            </div>
        </nav>
    );
};

export default Header;