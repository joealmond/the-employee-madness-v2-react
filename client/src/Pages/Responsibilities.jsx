import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const updateEmployee = async (id, stringData) => {
  return await fetch(`/api/employees/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ responsibilities: stringData }),
  });
};

const Responsibilities = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [responsibility, setResponsibility] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateEmployee(id, responsibility);
    if (response.ok) {
      console.log("Form submitted!");
      setResponsibility("");
    } else {
      console.error("Error ocurred submitting form.");
    }
  };

  useEffect(() => {
    const getEmployee = async () => {
      const res = await fetch(`/api/employees/${id}`);
      const data = await res.json();
      setEmployee(data);
    };

    getEmployee();
  }, [id, responsibility]);

  return (
    <div>
      <h2>Responsibilities of {employee?.name}:</h2>
      <ul>
        {employee?.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Add responsibility:
          <input
            type="text"
            value={responsibility}
            onChange={(e) => {
              setResponsibility(e.target.value);
            }}
          />
        </label>
        <label>
          <input type="submit" />
        </label>
      </form>
    </div>
  );
};

export default Responsibilities;
