import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Navbar from "./navpar.jsx";
import fmcg from "../assets/fmcg.png";
import grocery from "../assets/grocery.png";

function App() {
  const [isfocused, setIsFocused] = useState(false);

  return (
    <>
      <Navbar
        items={["Log Out", "Profile", "Contact us", "Cart", "Orders", "Home"]}
        search={
          <div className="searchbar">
            <input
              type="search"
              placeholder="Search for a Product , Brand or more"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{ caretColor: isfocused ? "auto" : "transparent" }}
            />
          </div>
        }
        focusimg={isfocused}
      />
      <div className="main-detail-box">
        <div className="category">
          <div>
            <img src={fmcg} alt="broken-fmcg" />
            <p>fmcg</p>
          </div>
        </div>
        <div className="category">
          <div>
            <img src={grocery} alt="broken-grocery" />
            <p>grocery</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
