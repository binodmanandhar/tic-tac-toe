import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // if (isEditing) {
  //   onChangeName(symbol, playerName);
  // }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }
  return (
    <li className={`player-container ${isActive ? "active" : "undefined"}`}>
      <div>
        <span className="player-symbol">{symbol}</span>
      </div>
      <div>
        <span className="player">{editablePlayerName}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </div>
    </li>
  );
}
