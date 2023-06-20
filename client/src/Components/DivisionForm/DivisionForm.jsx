import { useState } from "react";

const DivisionForm = ({ onSave, disabled, division, onCancel }) => {
  const [name, setName] = useState(division?.name ?? "");
  const [boss, setBoss] = useState(division?.boss ?? "");
  const [budget, setBudget] = useState(division?.budget ?? "");
  const [country, setCountry] = useState(division?.location?.country ?? "");
  const [city, setCity] = useState(division?.location?.city ?? "");

  const onSubmit = (e) => {
    e.preventDefault();

    if (division) {
      return onSave({
        ...division,
        name,
        boss,
        budget,
        location:{...division.location,
          country: division.location.country,
          city: division.location.city
        }
      });
    }

    return onSave({
      name,
      boss,
      budget,
      location:{
        country: division.location.country,
        city: division.location.city
      }
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
        <label htmlFor="level">Boss:</label>
        <input
          value={boss}
          onChange={(e) => setBoss(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Budget:</label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          name="position"
          id="position"
        />
      </div>

      <div className="control">
        <label htmlFor="country">Country:</label>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          name="country"
          id="country"
        />
      </div>

      <div className="control">
        <label htmlFor="city">City:</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
          id="city"
        />
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {division ? "Update Division" : "Create Division"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DivisionForm;

