import { useState, react } from "react";
import fmcg from "../assets/fmcg.png";
import grocery from "../assets/grocery.png";

export default function option() {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div className="main-detail-box">
        <div 
          title="Fmcg"
          className="category"
          style={{
            backgroundColor: selected ? "#eaecf0" : "#bd1b13",
            transform: selected ? "translateX(450px)" : "translateX(0)",
            transition: "background-color 1s ease, transform 0.3s ease",
          }}
          onClick={() => setSelected(false)}
        >
          <div>
            <img src={fmcg} alt="broken-fmcg" />
            <p>fmcg</p>
          </div>
        </div>
        <div
        title="Grocery"
          className="category"
          style={{
            backgroundColor: selected ? "#bd1b13" : "#eaecf0",
            transform: selected ? "translateX(-450px)" : "translateX(0)",
            transition: "background-color 1s ease, transform 0.3s ease",
          }}
          onClick={() => setSelected(true)}
        >
          <div>
            <img src={grocery} alt="broken-grocery" />
            <p>grocery</p>
          </div>
        </div>
      </div>
    </>
  );
}
