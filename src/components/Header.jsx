import React from "react";
import "../App.css";


function Header() {
  return (
    <header className="top-header">
      <div className="header-left">
      <img src="/images/Flag_img.png" alt="India Flag" className="flag-icon" />

      </div>
      <div className="header-middle">
        <p>Kissan Sathi</p>
        </div>
      
      <div className="header-right">
        <span><marquee>Azadi Ka Amrit Mahotsav</marquee></span>
        <select className="language-selector">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
