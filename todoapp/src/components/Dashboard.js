import React, { useState } from "react";
import Editable from "./Editable";
import Card from "./Card";

function Dashboard() {
  const [title, setTitle] = useState("Untitled Dashboard");
  const [cards, setCards] = useState([]);

  return (
    <div className="dashboard">
      <div className="dashboard-name">
        <Editable text={title}>
          <input
            className="dash-input"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Editable>
      </div>
      <button
        className="create-card-btn"
        // Placeholder solution for testing
        onClick={() =>
          cards.length < 6
            ? setCards([...cards, <Card key={new Date().getTime()} />])
            : alert("Reached max number of cards")
        }
      >
        Create New Card
      </button>
      {cards}
    </div>
  );
}

export default Dashboard;
