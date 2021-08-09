import React from "react";
import "./Tracking.css";
import Main from "./Main";
// import $ from "jquery";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Tracking = () => {
  fetch(
    "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
  ).then((res) => {
    res.json().then((data) => {
      console.log(data.data);
      if (data.data.length > 0) {
        var temp = "";
        data.data.forEach((itemData) => {
          temp += "<tr>";
          temp += "<td id='k'>" + itemData.keyword + "</td>";
          temp += "<td id='g'>" + itemData.goal + "</td>";
          temp += "<td id='m'>" + itemData.matches + "</td>";
          temp += "<td id='s'>" + itemData.search_status + "</td></tr>";
        });
        document.getElementById("data").innerHTML = temp;
      }
    });
  });
  return (
    <>
      <Main />
      <div className="tracking">
        <h3 className="track">The terms you are tracking</h3>
        <p className="refresh">The data will refresh every 5 min</p>
      </div>
      <div className="key">
        <table className="table">
          <thead>
            <tr>
              <th className="key1">Keywords</th>
              <th className="goal">Goal</th>
              <th className="mat">Matches</th>
              <th className="se">Search Status</th>
              <th className="del">Delete Keyword</th>
              <hr />
            </tr>
          </thead>
          <tbody id="data"></tbody>
        </table>
        <BiSearchAlt2 id="bi" />
        <MdDelete id="md" />
      </div>
      <MdDelete id="md1" />
      <MdDelete id="md2" />
      <MdDelete id="md4" />
      <MdDelete id="md5" />
      <MdDelete id="md6" />
      <button className="view" onclick="showHide3();">
        VIEW RESULT
      </button>
    </>
  );
};
export default Tracking;
