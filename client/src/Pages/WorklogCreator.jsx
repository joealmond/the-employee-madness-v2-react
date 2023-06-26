import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WorklogCreator = () => {
  const [label, setLabel] = useState("");
  const [hours, setHours] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(hours, label);
    const createWorklog = async () => {
      try {
        const res = await fetch(`/api/employees/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            label,
            hours,
          }),
        });

        if (res.ok) {
          navigate("/");
        } else {
          console.error("Failed to create worklog.");
        }
      } catch (error) {
        console.error("An error occurred:", error.message);
      }
    };

    createWorklog();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Worklog:</h3>
      <label>
        Label for work:
        <input type="text" onChange={(e) => setLabel(e.target.value)} />
      </label>
      <label>
        Hours to log:
        <input type="number" onChange={(e) => setHours(e.target.value)} />
      </label>
      <label>
        <input type="Submit" />
      </label>
    </form>
  );
};

export default WorklogCreator;
