import React from "react";
import "./Page2.css";
import bg from "./background2.png";

function Page2() {
  return (
    <div className="page2">
      <div className="page2-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="page2-content">
        <h2 className="page2-text1">
        
        </h2>
        <h3 className="page3-text1">
         
        </h3>
        <p className="arrow-instruction1">← or → to move</p>
      </div>
    </div>
  );
}

export default Page2;
