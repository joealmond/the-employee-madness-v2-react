import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Worklog = () => {
  const [employee, setEmployee] = useState({});
  const [label, setLabel] = useState("");
  const [hours, setHours] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getEmployee = async () => {
      const res = await fetch(`/api/employees/${id}`);
      const resData = await res.json();
      setEmployee(resData);
    };
    getEmployee();
  }, [id]);

  const handleAddWorklog = (e) => {
    e.preventDefault();
    const addWorklog = async () => {
      const res = await fetch(`/api/employees/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...employee,
          worklog: [
            ...employee.worklog,
            {
              label,
              hours,
            },
          ],
        }),
      });
      const resData = await res.json();
      console.log(resData);
      setEmployee(resData)
    };
    addWorklog();
  };

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Add Worklog:</p>
      <form onSubmit={handleAddWorklog}>
        <label>
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
        <label>
          Hours:
          <input
            type="numbe"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </label>
        <input type="submit" value="Add worklog" />
      </form>
      <p>Worklog:</p>
      <ul>
        {employee.worklog?.map((item, index) => (
          <li key={index}>
            <span>{item.label}</span>
            <span>{item.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Worklog;
