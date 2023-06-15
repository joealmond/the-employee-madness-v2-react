import { useState } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel, games }) => {
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [favGame, setFavGame] = useState(employee?.favGame ?? "");

  const onSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      return onSave({
        ...employee,
        name,
        level,
        position,
        favGame,
      });
    }

    return onSave({
      name,
      level,
      position,
      favGame,
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
      <label htmlFor="favGame">Favorite Game:</label>
      <select name="favGame" id="favGame" onChange={(e) => setFavGame(e.target.value)}>
      <option value="">{favGame?.name ? favGame.name : "--Please choose an option--"}</option>
          {games && games.map((game, i)=><option key={i} value={game._id}>{game.name}</option>)}
      </select>
      </div>

      <div className="control">
        <label htmlFor="level">Level:</label>
        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Position:</label>
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          name="position"
          id="position"
        />
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {employee ? "Update Employee" : "Create Employee"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
