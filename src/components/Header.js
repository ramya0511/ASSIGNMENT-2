import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Cake Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Cakes</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
