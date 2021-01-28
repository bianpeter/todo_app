import React, { useState } from "react";
import Editable from "./Editable";

function Card() {
  const [cardTitle, setCardTitle] = useState("Card Name");
  const [cardDesc, setCardDesc] = useState("Write description");

  let coll = document.getElementsByClassName("collapsible");
  let i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const description = this.nextElementSibling;
      if (description.style.display === "block") {
        description.style.display = "none";
      } else {
        description.style.display = "block";
      }
    });
  }

  return (
    <div className="card">
      <div className="card-name">
        <Editable text={cardTitle} type="input">
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
          <Editable text={cardDesc} type="textarea">
            <textarea
              className="description-input"
              rows="4"
              name="desc"
              value={cardDesc}
              onChange={(e) => setCardDesc(e.target.value)}
              />
          </Editable>
        </div>
      <button className="card-btn" onClick={(e) => e.target.parentNode.remove()}>X</button>
    </div>
  );
}

export default Card;
