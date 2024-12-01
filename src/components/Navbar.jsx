import React from 'react';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Price & Arrivals</li>
        <li className="navbar-item">Weather Forecast</li>
        <li className="navbar-item">Price Trend</li>
        <li className="navbar-item">Mobile App</li>
        <li className="navbar-item">Chatbot</li>
        <li className="navbar-item">Tender</li>
      </ul>
      <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
    </nav>
  );
};

export default Navbar;
