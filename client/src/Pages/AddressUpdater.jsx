import React, { useState, useEffect } from "react";
import AddressForm from "../Components/AddressForm/AddressForm";
import { useParams, useNavigate } from "react-router-dom";

const updateEmployee = async (employee) => {
    return await fetch(`/api/employees/${employee._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
};

const AddressUpdater = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  const handleUpdate = async (employee) => {
    try {
        const res = await updateEmployee(employee);
        if (res.ok) navigate('/')
    } catch (error) {
        console.log(error)
    }

  };

  useEffect(() => {
    const getEmployee = async (id) => {
      const res = await fetch(`/api/employees/${id}`);
      const employee = await res.json();
      setEmployee(employee);
    };
    getEmployee(id);
  }, [id]);

  return (
    <>{employee && <AddressForm onSave={handleUpdate} employee={employee} />}</>
  );
};

export default AddressUpdater;
