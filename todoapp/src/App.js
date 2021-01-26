import React from "react";
import "./sass/main.scss";
import Dashboard from "./components/Dashboard";

function App() {
  let dbArray = ["", "", ""];
  let dbArrayList = dbArray.map(() => <Dashboard />);

  return (
    <div>
      <Dashboard />
      {dbArrayList}
    </div>
  );
}

export default App;
