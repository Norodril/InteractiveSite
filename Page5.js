import React from "react";
import "./Page5.css";
import bg from "./background5.png";

function Page5() {
  return (
    <div className="page5">
      <div className="page5-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="page5-content">
        <h2 className="page5-text5">Arbel is probably my favorite grocery item you've ever come home with. Having someone like her to spend time with when I was younger was very special. Not only that, but her bubbly personality and funniness always lit up the house and brought a smile to everyone's face</h2>
        <p className="arrow-instructions5">← or → to move</p>
      </div>
    </div>
  );
}

export default Page5;