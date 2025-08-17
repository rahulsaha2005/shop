import React from "react";
import ReactDom from "react-dom/client";
import searchicon from "../assets/search.png";
import colored from "../assets/colored.png";

function Navbar({ items, search,focusimg }) {
  return (
    <>
      <div className="main-box">
        <div className="searchbox">
          <img
            src={focusimg ? colored : searchicon}
            alt="Search"
            className="searchicon"
          />
          {search}
        </div>

        <div className="child-box">
          {items.map((item, index) => (
            <div key={index} title={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Navbar;
