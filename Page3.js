import React from "react";
import "./Page3.css";
import bg from "./background3.png";

function Page3() {
  return (
    <div className="page3">
      <div className="page3-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="page3-content">
        <h2 className="page3-text2">
        </h2>
        <p className="arrow-instruction2">← or → to move</p>
      </div>
    </div>
  );
}

export default Page3;