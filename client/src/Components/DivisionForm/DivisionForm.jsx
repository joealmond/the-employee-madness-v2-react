import { useState, useEffect } from "react";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const DivisionForm = ({ onSave, disabled, division, onCancel }) => {
  const [name, setName] = useState(division?.name ?? "");
  const [boss, setBoss] = useState(division?.boss ?? "");
  const [budget, setBudget] = useState(division?.budget ?? "");
  const [country, setCountry] = useState(division?.location?.country ?? "");
  const [city, setCity] = useState(division?.location?.city ?? "");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then((employeesData) => {
      setEmployees(employeesData)
    })
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (division) {
      return onSave({
        ...division,
        name,
        boss,
        budget,
        location: {
          ...division.location,
          country,
          city,
        },
      });
    }

    return onSave({
      name,
      boss,
      budget,
      location: {
        country,
        city,
      },
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
        <label htmlFor="boss">Boss:</label>

        <select
          name="boss"
          id="boss"
          value={boss}
          required
          onChange={(e) => setBoss(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          {employees && employees.map((employee, index) => {
            return (
              <option key={index} value={employee._id}>{employee.name}</option>
            )
          })}
        </select>
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
