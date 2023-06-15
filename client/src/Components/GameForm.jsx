import { useState } from "react";

const GameForm = ({ onSave, disabled, game, onCancel }) => {
  const [name, setName] = useState(game?.name ?? "");
  const [maxPlayers, setMaxPlayers] = useState(game?.maxPlayers ?? "");

  const onSubmit = (e) => {
    e.preventDefault();

    if (game) {
      return onSave({
        ...game,
        name,
        maxPlayers,
      });
    }

    return onSave({
      name,
      maxPlayers,
    });
  };

  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="maxPlayers">Max Players:</label>
        <input
          value={maxPlayers}
          onChange={(e) => setMaxPlayers(e.target.value)}
          name="maxPlayers"
          id="maxPlayers"
        />
      </div>


      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {game ? "Update Game" : "Create Game"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default GameForm;
