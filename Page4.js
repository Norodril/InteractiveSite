import React from "react";
import "./Page4.css";
import bg from "./background4.png";

function Page4() {
  return (
    <div className="page4">
      <div className="page4-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="page4-content">
        <h2 className="page4-text"></h2>
        <p className="arrow-instruction">← or → to move</p>
      </div>
    </div>
  );
}

export default Page4;