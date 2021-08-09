import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Navbar from "./Navbar";
import "./Main.css";

const Main = ({ setSearch }) => {
  return (
    <>
      <Navbar />
      <div className="main">
        <h4 className="add">Add Another keyword</h4>
        <h4 className="add1">1/3</h4>
        <h4 className="class1">UPGRADE</h4>
        <h4 className="ad">Advanced search</h4>
      </div>
      <div className="main1">
        <BiSearchAlt2 id="search" />
        <input
          type="text"
          id="header-search1"
          placeholder="Enter you filters here"
          name="s"
        />
        <h3 className="save">SAVE FILTERS</h3>
      </div>
    </>
  );
};

export default Main;
