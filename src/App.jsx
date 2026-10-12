import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import "./index.css";
const dhikrList = [
  {
    arabic: "سُبْحَانَ اللَّهِ",
    name: "SubhanAllah",
    meaning: "Glory be to Allah",
  },
  {
    arabic: "الْحَمْدُ لِلَّهِ",
    name: "Alhamdulillah",
    meaning: "All praise is for Allah",
  },
  {
    arabic: "اللَّهُ أَكْبَرُ",
    name: "Allahu Akbar",
    meaning: "Allah is the Greatest",
  },
  {
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    name: "Astaghfirullah",
    meaning: "I seek forgiveness from Allah",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const [dhikrIndex, setDhikrIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Home");

  const dhikr = dhikrList[dhikrIndex];

 
  const increment = () => {
    setCount(count + 1);
  };

const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

  const reset = () => {
    setCount(0);
  };

  const changeDhikr = (direction) => {
    setDhikrIndex(
      (previous) =>
        (previous + direction + dhikrList.length) %
        dhikrList.length
    );
    setCount(0);
  };

  return (
    <div className="app">
      <header className="topbar">
        <button
          className="icon-button"
          aria-label="Open menu"
          onClick={() => setActiveTab("More")}
        >
          ☰
        </button>

        <div className="brand">
          <div className="brand-symbol">☾</div>
          <h1>Tasbeeh</h1>
          <p>REMEMBER ALLAH</p>
        </div>

        <button
          className="icon-button"
          aria-label="Settings"
          onClick={() => setActiveTab("Settings")}
        >
          ⚙
        </button>
      </header>

      <main className="main-content">
        <section className="dhikr-card">
          <button
            className="arrow-button"
            onClick={() => changeDhikr(-1)}
            aria-label="Previous dhikr"
          >
            ‹
          </button>

          <div className="dhikr-text">
            <h2 lang="ar" dir="rtl">{dhikr.arabic}</h2>
            <h3>{dhikr.name}</h3>
            <p>{dhikr.meaning}</p>
          </div>

          <button
            className="arrow-button"
            onClick={() => changeDhikr(1)}
            aria-label="Next dhikr"
          >
            ›
          </button>
        </section>

        <section className="counter-section">
          <button
            className="counter-circle"
            onClick={increment}
            aria-label="Count one dhikr"
          >
            <span className="mosque-icon">♧</span>
            <span className="count-number">{count}</span>
            <span className="count-label">COUNT</span>
            <span className="beads">● ● ● ● ● ● ●</span>
          </button>

          <p className="tap-hint">Tap the circle to count</p>
        </section>

        <section className="controls">
          <button
            className="round-control"
            onClick={decrement}
            aria-label="Decrease count"
          >
            −
          </button>

          <button
            className="tasbeeh-button"
            onClick={increment}
            aria-label="Increase count"
          >
            <span>۞</span>
            <small>TASBEEH</small>
          </button>

          <button
            className="round-control"
            onClick={increment}
            aria-label="Increase count"
          >
            +
          </button>
        </section>

        <button className="reset-button" onClick={reset}>
          <span>↻</span> Reset Count
        </button>

        <section className="quote-card">
          <span className="quote-decoration">❋</span>
          <div>
            <p>
              “And remember your Lord much and
              glorify Him in the evening and morning.”
            </p>
            <small>Qur’an 3:41</small>
          </div>
          <span className="quote-decoration">❋</span>
        </section>
      </main>

      <nav className="bottom-nav">
        {[
          ["Home", "⌂"],
          ["History", "☷"],
          ["Favorite", "☆"],
          ["More", "☰"],
        ].map(([label, symbol]) => (
          <button
            key={label}
            className={`nav-item ${
              activeTab === label ? "active" : ""
            }`}
            onClick={() => setActiveTab(label)}
          >
            <span>{symbol}</span>
            <small>{label}</small>
          </button>
        ))}
      </nav>
    </div>
  );

}


      
          
             


export default App
