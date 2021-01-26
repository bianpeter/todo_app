import React, { useState } from "react";
import "./sass/main.scss";
import Dashboard from "./components/Dashboard";

function App() {
  const [input, setInput] = useState([]);

  return (
    <div>
      <Dashboard />
      {input}
      <button onClick={() => setInput([<Dashboard />, input])}>
        Add another dashboard
      </button>
    </div>
  );
}

export default App;
