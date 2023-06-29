import { useState, useEffect } from "react";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const DivisionForm = ({ onSave, disabled, division, onCancel }) => {
  const [name, setName] = useState(division?.name ?? "");
  const [employee, setemployee] = useState(division?.boss ?? "");
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
        employee,
      });
    }

    return onSave({
      name,
      employee,
    });
  };

  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      <div className="control">
        <label htmlFor="name">Division name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="boss">Employee:</label>

        <select
          name="boss"
          id="boss"
          value={employee}
          required
          onChange={(e) => setemployee(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          {employees && employees.map((employee, index) => {
            return (
              <option key={index} value={employee._id}>{employee.name}</option>
            )
          })}
        </select>
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
