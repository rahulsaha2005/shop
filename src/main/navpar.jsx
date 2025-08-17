import React from "react";
import ReactDom from "react-dom/client";
import searchicon from "../assets/search.png";
import colored from "../assets/colored.png";

function Navbar({ items, search, focusimg }) {
  return (
    <>
    {/* main box where  we are putting data for navbar */}
      <div className="main-box">
        {/* input div which is directly link product entered by 
        the user so it can search products related to that word */}
        <div className="searchbox">
          {/* image for search icon */}
          <img
            src={focusimg ? colored : searchicon}
            alt="Search"
            className="searchicon"
          />
          {/* input  tag containing data for user*/}
          {search}
        </div>
        {/* how we image and input combined , it is because we use padding for it */}
        
        {/* div containing link to move that page */}
        <div className="child-box">
          {items.map((item, index) => (
            <div key={index} title={item}>
              {item}
            </div>
          ))}
        </div>
        {/* directly passed through function and used map to print evry that div */}
      </div>
    </>
  );
}
export default Navbar;
