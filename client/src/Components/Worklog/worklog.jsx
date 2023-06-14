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
      setEmployee(employee);
    });
  }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee({...employee, worklog: [...employee.worklog,{
      label: label,
      hours: parseInt(hours),
    }]})
      .then(() => {
        // navigate("/");
      });
  };

  return (
    <div>
      <form className="EmployeeForm" onSubmit={handleSubmit} >
      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          value={employee?.name ?? ""}
          name="name"
          id="name"
          disabled
        />
      </div>
      
      <div className="control">
        <label htmlFor="label">Label:</label>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          name="label"
          id="label"
        />
      </div>

      <div className="control">
        <label htmlFor="hours">Hours:</label>
        <input
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          type="number"
          name="hours"
          id="hours"
        />
      </div>

      <div className="buttons">
        <button type="submit" >
          Update Worklog
        </button>

        <button type="button" onClick={()=> navigate("/")}>
          Cancel
        </button>
      </div>
    </form>
      <div>
        <h3>Worklog History:</h3>
        <ul >
        {employee && employee.worklog.map((log, i)=>(
                <li key={i} >{log.label}{" "}{log.hours}</li>
                ))}
                </ul>
      </div>
    </div>
  );
};

export default Worklog;
