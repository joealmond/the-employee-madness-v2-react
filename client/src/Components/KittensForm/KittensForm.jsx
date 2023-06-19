import { useState } from "react";

const KittensForm = ({ onSave, employee, kittens, onCancel }) => {
  const [kname, setKname] = useState("");
  const [kweight, setKweight] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    return onSave({
      name: kname,
      weight: kweight,
      employee: employee._id,
    });
  };

  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      <div className="control">
        <h3>{employee?.name}</h3>
      </div>

      <div className="control">
        <label htmlFor="kname">Kitten name:</label>
        <input
          value={kname}
          onChange={(e) => setKname(e.target.value)}
          name="kname"
          id="kname"
        />
      </div>

      <div className="control">
        <label htmlFor="kweight">Kitten weight:</label>
        <input
          value={kweight}
          onChange={(e) => setKweight(e.target.value)}
          name="kweight"
          id="kweight"
          type="number"
        />
      </div>

      <div>
        <h4>Kittens:</h4>
        <ul>
          {kittens &&
            kittens.map((kitten, i) => (
              <li key={i}>
                <span>Name: {kitten.name}</span>
                <span> - </span>
                <span>Weight: {kitten.weight} kg</span>
              </li>
            ))}
        </ul>
      </div>

      <div className="buttons">
        <button type="submit">Add Kitten</button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default KittensForm;
