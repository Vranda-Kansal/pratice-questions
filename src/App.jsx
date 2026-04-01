import { useState } from "react";
import LightFeatures from "./components/LightFeatures";
import "./App.css";

function App() {
  const [patterns, setPatterns] = useState([
    { id: 123, pattern: "blinking", time: 5 },
    { id: 124, pattern: "fading", time: 2 },
    { id: 125, pattern: "static", time: 3 },
  ]);
  const [running, setRunning] = useState(false);

  function handleClick() {
    setRunning(true);
  }

  function handleData(value, id, param) {
    const newArr = patterns.map((pattern) =>
      pattern.id === id ? { ...pattern, [param]: value } : pattern,
    );
    setPatterns(newArr);
  }

  return (
    <div>
      <h1>Diwali of Lights</h1>
      {patterns.map((pattern) => (
        <div className="flex border-2 border-red-200 p-2 m-2" key={pattern.id}>
          <LightFeatures
            pattern={pattern.pattern}
            interval={pattern.time}
            running={running}
          />
          <div className="flex p-2 m-1 gap-5 items-center">
            <label>Pattern:</label>
            <select
              value={pattern.pattern}
              onChange={(e) =>
                handleData(e.target.value, pattern.id, "pattern")
              }
            >
              <option value="blinking">Blinking</option>
              <option value="fading">Fading</option>
              <option value="static">Static</option>
            </select>
            <label>Intervals:</label>
            <input
              type="number"
              min="1"
              className="border-2 border-black/50"
              value={pattern.time}
              onChange={(e) =>
                handleData(parseInt(e.target.value), pattern.id, "time")
              }
            />
          </div>
        </div>
      ))}
      <button
        className="bg-red-200 p-4 m-2 rounded-xl font-bold text-lg cursor-pointer"
        onClick={handleClick}
      >
        Start Now
      </button>
    </div>
  );
}

export default App;
