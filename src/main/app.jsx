import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Navbar from "./navpar.jsx";
import Option from "../shop/front.jsx";

function App() {
  // use for search icon change to color 
  const [isfocused, setIsFocused] = useState(false);

  return (
    <>
    {/* containing home page navbar data */}
      <Navbar
      // link that need for any home page
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
        // coloured image
        focusimg={isfocused}
      />
      {/* option for fmcg and grocery */}
      <Option/>
    </>
  );
}
export default App;
