import React from "react";
import "../styles/navbar.scss";
import { BiUserCircle, BiSearch } from "react-icons/bi";

const navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__top">
        <div className="nav__top__logo">
          <p>Denver Meadows</p>
        </div>
        <div className="nav__top__search-login">
          <p>
            <BiUserCircle />
          </p>
          <p>
            <BiSearch />
          </p>
        </div>
      </div>
      <div className="nav__bottom">
        <ul className="nav__bottom__list">
          <li className="nav__bottom__list-link">Coding</li>
          <li className="nav__bottom__list-link">Reading</li>
          <li className="nav__bottom__list-link">Runnning</li>
          <li className="nav__bottom__list-link">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
