import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">K</div>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to="/bible-study">Bible Study</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
