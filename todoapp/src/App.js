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
          setdashboard([
            ...dashboard,
            <Dashboard key={dashboard.length} id={dashboard.length} />,
          ])
        }
      >
        Add another dashboard
      </button>
    </div>
  );
}

export default App;
