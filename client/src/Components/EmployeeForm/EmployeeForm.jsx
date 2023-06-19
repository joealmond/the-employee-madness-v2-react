import { useState } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [started, setStarted] = useState(employee?.started ?? "");
  const [salary, setSalary] = useState(employee?.salary ?? "");
  const [desiredSalary, setDesiredSalary] = useState(employee?.desiredSalary ?? "");
  const [favColor, setFavColor] = useState(employee?.favColor ?? "");

  const onSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      return onSave({
        ...employee,
        name,
        level,
        position,
        started,
        salary,
        desiredSalary,
        favColor,
      });
    }

    return onSave({
      name,
      level,
      position,
      started,
      salary,
      desiredSalary,
      favColor,
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

      <div className="control">
        <label htmlFor="started">Started:</label>
        <input
          value={started}
          onChange={(e) => setStarted(e.target.value)}
          name="started"
          id="started"
          type="date"
        />
      </div>

      <div className="control">
        <label htmlFor="salary">Salary:</label>
        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          name="salary"
          id="salary"
          type="number"
        />
      </div>

      <div className="control">
        <label htmlFor="desiredSalary">Desired Salary:</label>
        <input
          value={desiredSalary}
          onChange={(e) => setDesiredSalary(e.target.value)}
          name="desiredSalary"
          id="desiredSalary"
          type="number"
        />
      </div>

      <div className="control">
        <label htmlFor="favColor">Favorite color:</label>
        <input
          value={favColor}
          onChange={(e) => setFavColor(e.target.value)}
          name="favColor"
          id="favColor"
          type="color"
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
