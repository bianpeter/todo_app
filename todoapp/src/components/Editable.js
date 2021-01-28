import React, { useState } from "react";

function Editable({ text, type, children }) {
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event) => {
    const { key } = event;
    const keys = ["Escape", "Enter"];

    if (keys.indexOf(key) > -1) {
      setEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)}>
          <span>{text}</span>
        </div>
      )}
    </div>
  );
}

export default Editable;
