import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const updateEmployee = (employee) => {
  return fetch(`/api/employees/${employee._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
};

const fetchEmployee = (id) => {
  return fetch(`/api/employees/${id}`).then((res) => res.json());
};

const Worklog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [label, setLabel] = useState('');
  const [hours, setHours] = useState('');

  useEffect(() => {
    fetchEmployee(id).then((employee) => {
      if (employee) setEmployee(employee);
    });
  }, [id]);

  function handleSubmit() {

  }

  return (
    <div>
      <div>
        <p>Employee: {employee?.name}</p>
      </div>
      <form className="EmployeeForm" onSubmit={handleSubmit}>
      <div className="control">
        <label htmlFor="name">Label:</label>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="level">Hours:</label>
        <input
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="buttons">
        <button type="submit" >
          {employee ? "Update Employee" : "Create Employee"}
        </button>

        <button type="button" onClick={()=> navigate("/")}>
          Cancel
        </button>
      </div>
    </form>
      <div>
        <p>Worklog: </p>
        {employee?.worklog.map((log, i)=>(
            <ul key={i}>
                <li>log</li>
            </ul>
        ))}
      </div>
    </div>
  );
};

export default Worklog;
