import React, { useState } from "react";
import Editable from "./Editable";

function Card() {
  const [cardTitle, setCardTitle] = useState("Card Name");
  const [cardDesc, setCardDesc] = useState("Write description");

  return (
    <div className="card">
      <div className="card-name">
        <Editable text={cardTitle}>
          <input
            className="card-input"
            type="text"
            name="title"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
        </Editable>
      </div>
      <div className="description">
        <Editable text={cardDesc}>
          <textarea
            className="description-input"
            rows="4"
            name="desc"
            value={cardDesc}
            onChange={(e) => setCardDesc(e.target.value)}
          />
        </Editable>
      </div>
      <button
        className="card-btn"
        onClick={(e) => e.target.parentNode.remove()}
      >
        X
      </button>
    </div>
  );
}

export default Card;
