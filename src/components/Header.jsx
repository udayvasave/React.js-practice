import PropTypes from "prop-types";
import Hamburger from "../data/images/hamburger.svg";
import "../components/Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="navbar">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/project"> Projects</Link>{" "}
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#ffffff" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
