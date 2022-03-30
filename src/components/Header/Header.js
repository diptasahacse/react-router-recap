import React from 'react';
import { Link } from 'react-router-dom';
import MyCustomLink from '../MyCustomLink/MyCustomLink';

const Header = () => {
    return (
        <nav>
            <MyCustomLink to="/">Home</MyCustomLink>
            <MyCustomLink to="/contacts">Contacts</MyCustomLink>
            <MyCustomLink to="/products">Products</MyCustomLink>
            
        </nav>
    );
};

export default Header;