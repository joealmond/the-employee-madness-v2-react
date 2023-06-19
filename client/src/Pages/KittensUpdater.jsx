import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import KittensForm from "../Components/KittensForm";

const addKitten = (kitten) => {
  return fetch(`/api/kittens/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(kitten),
  }).then((res) => res.json());
};

const fetchEmployee = (id) => {
  return fetch(`/api/employees/${id}`).then((res) => res.json());
};

const fetchKittens = (employeeId) => {
  return fetch(`/api/kittens/?employeeId=${employeeId}`).then((res) =>
    res.json()
  );
};

const KittensUpdates = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [kittens, setKittens] = useState(null);

  useEffect(() => {
    fetchKittens(id).then((kittens) => {
      setKittens(kittens);
    });

    fetchEmployee(id).then((employee) => {
      setEmployee(employee);
    });
  }, [id]);

  const handleAddKitten = (kitten) => {
    addKitten(kitten).then(() => {
      navigate("/");
    });
  };

  return (
    <KittensForm
      kittens={kittens}
      employee={employee}
      onSave={handleAddKitten}
      onCancel={() => navigate("/")}
    />
  );
};

export default KittensUpdates;
