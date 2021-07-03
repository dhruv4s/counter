import React, { useState } from "react";
import Counter from "./components/counter.js";
import "./styles.css";

const App = () => {
  const [initial, setInitial] = useState(0);

  const Start = () => {
    setInitial(1);
  };
  return (
    <div className="counterMain">
      {initial !== 1 && (
        <div>
          <button className="startButton" onClick={Start}>
            Initialise
          </button>
        </div>
      )}
      {initial === 1 && (
        <div>
          <Counter />
        </div>
      )}
    </div>
  );
};

export default App;
