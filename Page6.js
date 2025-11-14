import React, { useState } from "react";
import "./Page6.css";
import presentImg from "./birthdaycake.png";
import happyBirthdayAudio from "./birthdayaudio.mp3";
import Confetti from "react-confetti";

function Page6() {
  const [showConfetti, setShowConfetti] = useState(false);
  const handlePress = () => {
    const audio = new Audio(happyBirthdayAudio);
    audio.play();
    setShowConfetti(true);
  };

  return (
    <div className="page6">
      {showConfetti && (
        <Confetti width = {window.innerWidth} height = {window.innerHeight} />
      )}
      <h1 className="page6-text">Happy Birthday, Ima 🎂💗 <br />
        I wonder what the next years will have in store</h1>
      <button className="page6-button" onClick={handlePress}>
        <img src={presentImg} alt="Present" className="present-image" />
      </button>
    </div>
  );
}

export default Page6;