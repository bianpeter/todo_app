import React, { useState } from "react";
import "./sass/main.scss";
import Dashboard from "./components/Dashboard";

function App() {
  const [dashboard, setdashboard] = useState([]);

  return (
    <div className="main">
      <h1>To-Do App</h1>
      <Dashboard />
      {dashboard}
      <div className="add-container">
        <button className="add-btn"
          onClick={() =>
            setdashboard([...dashboard, <Dashboard key={new Date().getTime()} />])
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
