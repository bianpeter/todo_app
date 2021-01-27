import React, { useState } from "react";
import Editable from "./Editable";
import Card from "./Card";

export default function Dashboard() {
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
          setCards([...cards, <Card key={cards.length} id={cards.length} />])
        }
      >
        Create card
      </button>
      {cards}
    </div>
  );
}
