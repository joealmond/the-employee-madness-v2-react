import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const updateEmployee = async (id, stringData) => {
  try {
    return await fetch(`/api/employees/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ responsibilities: stringData }),
    });
  } catch (error) {
    console.error("An error ocurred.", error.message);
  }
};

const Responsibilities = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [responsibility, setResponsibility] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await updateEmployee(id, responsibility);
      if (response.ok) {
        console.log("Form submitted!");
        setResponsibility("");
      } else {
        console.error("Error ocurred submitting form.");
      }
    } catch (error) {
      console.error("An error ocurred.", error.message);
    }
  };

  useEffect(() => {
    try {
      const getEmployee = async () => {
        const res = await fetch(`/api/employees/${id}`);
        const data = await res.json();
        setEmployee(data);
      };
      getEmployee();
    } catch (error) {
      console.error("An error ocurred.", error.message);
    }
  }, [id, responsibility]);

  const { name, responsibilities } = employee ?? {
    name: "",
    responsibilities: [""],
  };

  if (responsibility.trim() === "") {
    console.error('Cannot be empty!')
    return;
  }

  return (
    <div>
      <h2>Responsibilities of {name}:</h2>
      <ul>
        {responsibilities.map((responsibility, index) => (
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
