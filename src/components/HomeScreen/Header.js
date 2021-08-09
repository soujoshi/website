import React from "react";
import logo from "../images/logo.png";
import { RiArrowRightLine } from "react-icons/ri";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div id="navbar">
        <img id="img" src={logo} alt="logo" />
        <h3 id="heading">
          Term<span>Monitor</span>
        </h3>
        <form action="/" method="get">
          <label htmlFor="header-search" id="nav1">
            <span className="nav">KEYWORDS</span>
          </label>
          <input type="text" id="header-search" placeholder="SUBMIT" name="s" />
          <RiArrowRightLine id="icon" />
          <h3 id="a">A</h3>
        </form>
      </div>
    </>
  );
};
export default Header;
