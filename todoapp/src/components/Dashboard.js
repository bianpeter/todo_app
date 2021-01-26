import React, { useState } from "react";
import Editable from "./Editable";
import duplicate from "../scripts/duplicate";

export default function Dashboard() {
  const [title, setTitle] = useState("untitled dashboard");

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
      <button onClick={duplicate}>Dupe</button>
    </div>
  );
}
