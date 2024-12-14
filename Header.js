import React from 'react';

function Header({ onNavClick }) {
  return (
    <header>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSItVagF6MbVNzlqENNVqTFFwXv0ouZwRdGg&s" alt="Bus Smiley" className="logo" />
      <h1>Grand River Transit</h1>
      <nav>
        <ul>
          <li><a onClick={() => onNavClick('home')}>Home</a></li>
          <li><a onClick={() => onNavClick('services')}>Services</a></li>
          <li><a onClick={() => onNavClick('login')}>Online Booking</a></li>
          <li><a onClick={() => onNavClick('about')}>About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
