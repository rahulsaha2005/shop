import React, { useState, useEffect } from "react";
import searchicon from "../assets/search.png";
import colored from "../assets/colored.png";

function Navbar({ items, search, focusimg }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div className="main-box">
      {/* Search box */}
      <div className="searchbox">
        <img
          src={focusimg ? colored : searchicon}
          alt="Search"
          className="searchicon"
        />
        {search}
      </div>

      {/* Navbar links for desktop */}
      {!isMobile && (
        <div className="child-box">
          {items.map((item, index) => (
            <div key={index} title={item}>
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Hamburger icon for mobile */}
      {isMobile && (
        <div
          className="hamburger"
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <div className={`line ${hamburgerOpen ? "open" : ""}`}></div>
          <div className={`line ${hamburgerOpen ? "open" : ""}`}></div>
          <div className={`line ${hamburgerOpen ? "open" : ""}`}></div>
        </div>
      )}

      {/* Hamburger menu items */}
      {isMobile && hamburgerOpen && (
        <div className="hamburger-menu">
          {items.map((item, index) => (
            <div key={index} title={item}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
