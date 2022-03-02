import React from "react";
import "../styles/navbar.scss";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import SearchBar from "./SearchBar";

const navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__top">
        <div className="nav__top__logo">
          <p>Denver Meadows</p>
        </div>
        <div className="nav__top__search-login">
          <SearchBar />
          <BiUserCircle className="nav__top-login" />
        </div>
      </div>
      <div className="nav__bottom">
        <ul className="nav__bottom__list">
          <li className="nav__bottom__list-link">Coding</li>
          <li className="nav__bottom__list-link">Reading</li>
          <li className="nav__bottom__list-link">Running</li>
          <li className="nav__bottom__list-link">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
