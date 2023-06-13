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

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee(id).then((employee) => {
      if (employee) setEmployee(employee);
    });
  }, [id]);

  return (
    <div>
      <div>
        <p>Employee: </p>
        {employee?.name}
      </div>
      <div>
        <label>Add log: 
            <input type="text" />

        </label>
      </div>
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
