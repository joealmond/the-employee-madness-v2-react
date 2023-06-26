import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Responsibilities = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const getEmployee = async () => {
      const res = await fetch(`/api/employees/${id}`);
      const data = await res.json();
      setEmployee(data);
    };

    getEmployee();
  }, [id]);

  return (
    <div>
      <h2>Responsibilities of {employee?.name}:</h2>
      <ul>
        {employee?.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default Responsibilities;
