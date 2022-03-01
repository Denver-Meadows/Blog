import React from "react";
import "../styles/navbar.scss";

const navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <p>Denver Meadows</p>
      </div>
      <ul className="nav__list">
        <li className="nav__list-link">Coding</li>
        <li className="nav__list-link">Reading</li>
        <li className="nav__list-link">Runnning</li>
        <li className="nav__list-link">About</li>
      </ul>
      <div className="nav__search-login">
        <p>login</p>
        <p>search</p>
      </div>
    </nav>
  );
};

export default navbar;