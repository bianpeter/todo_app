import React, { useState } from "react";
import "./sass/main.scss";
import Dashboard from "./components/Dashboard";

function App() {
  const [dashboard, setdashboard] = useState([]);

  return (
    <div>
      <Dashboard />
      {dashboard}
      <button
        onClick={() =>
          setdashboard([...dashboard, <Dashboard key={new Date().getTime()} />])
        }
      >
        Add another dashboard
      </button>
    </div>
  );
}

export default App;
