import { useState } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [yearsOfExperience, setYearsOfExperience] = useState(
    employee?.level === "Junior" ? 0 : employee?.yearsOfExperience ?? ""
  );

  const onSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      return onSave({
        ...employee,
        name,
        level,
        position,
        yearsOfExperience,
      });
    }

    return onSave({
      name,
      level,
      position,
      yearsOfExperience,
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

      {level !== "Junior" && (
        <div className="control">
          <label htmlFor="yearsOfExperience">Years Of Experience:</label>
          <input
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            name="yearsOfExperience"
            id="yearsOfExperience"
            type="number"
          />
        </div>
      )}

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
