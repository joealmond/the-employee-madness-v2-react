import { useState } from "react";

const KittensForm = ({ onSave, disabled, employee, onCancel }) => {
  const [kittens, setKittens] = useState(employee?.kittens);
  const [kname, setKname] = useState('');
  const [kweight, setKweight] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

      return onSave({
        ...employee,
        kittens: [...kittens, {
          name: kname,
          weight: kweight
        }]
      });
  }
  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          value={employee?.name}
          name="name"
          id="name"
          disabled
        />
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
        <p>Kittens:</p>
        <ul>
          {kittens && kittens.map((kitten, i) => 
          (<li key={i} ><span>Name: {kitten.name} </span><span> Weight: {kitten.weight}</span></li>)
          )}
        </ul>
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          Add Kitten
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default KittensForm;
