import React, { useState } from "react";
import Editable from "./Editable";
import Card from "./Card";

function Dashboard() {
  const [title, setTitle] = useState("Untitled dashboard");
  const [cards, setCards] = useState([]);

  return (
    <div className="dashboard">
      <div className="dashContainer"> 
        <Editable text={title} placeholder="Untitled dashboard" type="input">
          <input
          className="dashInput"
           type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
        </Editable>
      </div>

      <button className="create"
        onClick={() =>
          cards.length < 4
            ? setCards([...cards, <Card key={new Date().getTime()} />])
            : alert("Reached max number of cards")
        }
      >
        Create card
      </button>
      <div className="cardContainer">
      {cards}
      </div>
    </div>
  );
}

export default Dashboard;
