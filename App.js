import React, { useState, useEffect } from "react";
import "./App.css";
import presentImg from "./present.png";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import backgroundNoise from './backgroundNoise.mp3';
import mouseclick from './mouseclick.mp3';

function App() {
  const [opened, setOpened] = useState(false);
  const [fade, setFade] = useState(false);
  const [page, setPage] = useState(0); // 0 = Intro, 1 = Page2, etc.

  const handleOpen = () => {
    setFade(true);
    setTimeout(() => {
      setOpened(true);
      setFade(false);
    }, 1400);
  };
function handlePresentClick() {
  handleOpen();
  const audio = new Audio(backgroundNoise);
  audio.play();
}
// 🔑 Arrow key navigation
useEffect(() => {
  const handleKey = (e) => {
    // Go forward
    if (e.key === "ArrowRight") {
      if (page === 0 && opened) setPage(1);
      else if (page > 0 && page < 5) setPage((prev) => prev + 1); // max page = 6
      const audio = new Audio(mouseclick);
      audio.play()
    }
    // Go backward
    if (e.key === "ArrowLeft") {
      if (page > 1) setPage((prev) => prev - 1);
      else if (page === 1) setPage(0); // back to intro
      const audio = new Audio(mouseclick);
      audio.play()
    }
  };
  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [page, opened]);

  return (
    <div className="scene-wrapper">
      {/* Background Layers */}
      <div className={`bg-layer bg1 ${opened ? "fade-out" : "fade-in"}`}></div>
      <div className={`bg-layer bg2 ${opened ? "fade-in" : "fade-out"}`}></div>

      {/* Page 0 — Birthday greeting */}
      {page === 0 && (
        <div className="content">
          {!opened ? (
            <>
              <h1 className="title">Happy Birthday Ima💗</h1>
              <button className="present-button" onClick={handlePresentClick}>
                <img src={presentImg} alt="Present" />
              </button>
            </>
          ) : (
            <>
              <h2 className="scene2-message">Where it all began...</h2>
                <p className="arrow-instruction">
                  click the right arrow key to continue
                </p>
            </>
          )}
        </div>
      )}

      {/* Page 1–6 */}
      {page === 1 && <Page2 />}
      {page === 2 && <Page3 />}
      {page === 3 && <Page4 />}
      {page === 4 && <Page5 />}
      {page === 5 && <Page6 />}
    </div>
  );
}

export default App;