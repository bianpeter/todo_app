import React, { useState } from "react";
import Editable from "./Editable";

function Card() {
  const [cardTitle, setCardTitle] = useState("New Card");
  const [cardDesc, setCardDesc] = useState("description");

  return (
    
    <div className="card">
      <Editable text={cardTitle} type="input">
        <input
          type="text"
          name="title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
      </Editable>
      <Editable text={cardDesc} type="textarea">
        <textarea
          rows="8"
          name="desc"
          value={cardDesc}
          onChange={(e) => setCardDesc(e.target.value)}
        />
      </Editable>
      <button className="cardButton" onClick={(e) => e.target.parentNode.remove()}>X</button>
    </div>
  );
}

export default Card;
