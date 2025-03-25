import React, { useState, useEffect } from "react";

export function CountDownLightSwitch() {
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  
 

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    <div className={`container ${theme}`}>
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input type="checkbox" checked={theme === "light"} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>

      <div className="timer-section">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(time / 30) * 100}%` }}
          ></div>
        </div>
        <div className="timer">{time}</div>
        <div className="btn-group">
          <button onClick={startTimer} disabled={isRunning}>
            Start Timer
          </button>
          <button onClick={resetTimer} style={{ display: time < 30 ? "inline" : "none" }}>
            Reset Timer
          </button>
        </div>
        {time === 0 && <div className="message">Time's up!</div>}
      </div>

      <style jsx>{`
        :root {
          --bg-color: #1e1e1e;
          --text-color: #f1f1f1;
          --accent-color: #4caf50;
          --container-bg: #2a2a2a;
          --btn-bg: #4caf50;
          --btn-hover: #45a049;
        }
        .light {
          --bg-color: #f8f8f8;
          --text-color: #333;
          --accent-color: #ff9800;
          --container-bg: #fff;
          --btn-bg: #ff9800;
          --btn-hover: #e68900;
        }
        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: var(--bg-color);
          color: var(--text-color);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          transition: background 0.5s, color 0.5s;
        }
        .container {
          background: var(--container-bg);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 90%;
          max-width: 400px;
          text-align: center;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .toggle-switch {
          position: relative;
          width: 50px;
          height: 26px;
        }
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: background-color 0.4s;
          border-radius: 26px;
        }
        input:checked + .slider {
          background-color: var(--accent-color);
        }
        .timer {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        .progress-bar {
          width: 100%;
          height: 20px;
          background: #ddd;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        .progress {
          height: 100%;
          background: var(--accent-color);
          transition: width 1s linear;
        }
        .btn-group {
          margin-top: 1rem;
        }
        button {
          padding: 0.7rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          background: var(--btn-bg);
          color: var(--text-color);
          cursor: pointer;
          transition: background 0.3s;
          margin: 0 0.3rem;
        }
        button:hover {
          background: var(--btn-hover);
        }
        .message {
          margin-top: 1rem;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
