import React, { useState } from "react";
import Editable from "./Editable";
import Card from "./Card";

function Dashboard() {
  const [title, setTitle] = useState("untitled dashboard");
  const [cards, setCards] = useState([]);

  return (
    <div className="dashboard">
      <Editable text={title} placeholder="untitled dashboard" type="input">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Editable>
      <button
        onClick={() =>
          cards.length < 4
            ? setCards([...cards, <Card key={new Date().getTime()} />])
            : alert("Reached max number of cards")
        }
      >
        Create card
      </button>
      {cards}
    </div>
  );
}

export default Dashboard;
