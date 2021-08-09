import React from "react";
import Header from "./Header";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FiCreditCard } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const Navbar = ({ setSearch }) => {
  return (
    <>
      <Header />
      <div id="container">
        <a href="/" id="keyword">
          <FontAwesomeIcon icon={faHome} id="home" />
          Add Keywords
        </a>
        <br />
        <a href="/" id="matches">
          <FontAwesomeIcon icon={faUsers} id="home1" />
          Matches
        </a>
        <br />
        <a href="/" id="manage">
          <FiCreditCard id="home1" />
          Manage sources
        </a>
        <br />
        <a href="/" id="integration">
          <FiCreditCard id="home1" />
          Integration
        </a>
        <br />
        <a href="/" id="alerts">
          <FiCreditCard id="home1" />
          Alerts
        </a>
        <br />
        <a href="/" id="setting">
          <AiFillStar id="home3" />
          Settings <IoMdArrowDropdown id="home2" />
        </a>
        <p className="Bill">Billings</p>
      </div>
    </>
  );
};

export default Navbar;
